import React, { useRef, useState } from "react";
import PinWheel from "../../static/images/pin-wheel.png";

type Segment = {
  id: string | number;
  label: string;
  backgroundColor: string;
  textColor: string;
};

type LuckyWheelProps = {
  segments: Segment[];
  size?: number;
  spinDuration?: number;
  onFinish?: (segment: Segment, index: number) => void;
  winnerIndex?: number | null;
  easing?: string;
  spinning?: boolean;
  setSpinning?: (v: boolean) => void;
};

export default function LuckyWheel({
  segments,
  size = 320,
  spinDuration = 5,
  onFinish,
  winnerIndex = null,
  easing = "cubic-bezier(0.33,1,0.68,1)",
  spinning = false,
  setSpinning,
}: LuckyWheelProps) {
  const segCount = segments.length;
  const segAngle = 360 / segCount;
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const spinCountRef = useRef(0);

  // ✅ Chuẩn hóa màu (#fff → #ffffff)
  const normalizeColor = (color: string) => {
    if (/^#[0-9A-Fa-f]{3}$/.test(color)) {
      return (
        "#" +
        color
          .substring(1)
          .split("")
          .map((c) => c + c)
          .join("")
      );
    }
    return color;
  };

  const getTargetRotationForIndex = (index: number) => {
    const centerAngle = index * segAngle + segAngle / 2;
    const target = 360 - (centerAngle - 90);
    return (target + 360) % 360;
  };

  const spin = (forcedIndex?: number | null) => {
    if (spinning) return;
    if (forcedIndex == null) return;

    setSpinning?.(true);

    const chosenIndex = forcedIndex;
    const targetBase = getTargetRotationForIndex(chosenIndex);
    const extraTurns = 4 + Math.floor(Math.random() * 4);
    spinCountRef.current += extraTurns;
    const totalRotation = spinCountRef.current * 360 + targetBase;

    const el = wheelRef.current;
    if (!el) return;
    el.style.transition = `transform ${spinDuration}s ${easing}`;
    el.style.transform = `rotate(${totalRotation}deg)`;

    setTimeout(() => {
      setSpinning?.(false);
      if (onFinish) onFinish(segments[chosenIndex], chosenIndex);
    }, spinDuration * 1000);
  };

  const radius = size / 2;
  const fontSize = Math.max(12, size / 22);

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        margin: "0 auto",
        borderRadius: "50%",
        border: "1px solid #FFD85D", // viền vàng mảnh ngoài cùng
        boxSizing: "content-box",
        background: "#E02424", // nền đỏ nhẹ bên trong (ẩn sau SVG)
        boxShadow: "0 0 20px rgba(255, 87, 38, 0.4)",
        overflow: "hidden",
      }}
    >
      <div
        ref={wheelRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          transformOrigin: "center center",
        }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <g transform={`translate(${radius},${radius})`}>
            {segments.map((seg, i) => {
              const segRadius = radius - 20;
              const borderRadius = 52; // 💡 bán kính vòng border cách tâm 52px
              const startAngle = (i * segAngle * Math.PI) / 180;
              const endAngle = ((i + 1) * segAngle * Math.PI) / 180;

              // toạ độ cho border
              const bx1 = borderRadius * Math.cos(startAngle);
              const by1 = borderRadius * Math.sin(startAngle);
              const bx2 = borderRadius * Math.cos(endAngle);
              const by2 = borderRadius * Math.sin(endAngle);

              const borderPath = [
                `M ${bx1} ${by1}`,
                `A ${borderRadius} ${borderRadius} 0 0 1 ${bx2} ${by2}`,
              ].join(" ");

              const fillColor = seg.backgroundColor;
              // const strokeColor = i % 2 === 0 ? "#FFD13E" : "#F3F3E9";
              const strokeColor = i % 2 === 0 ? "#FFD13E" : "";

              const d = [
                `M 0 0`,
                `L ${segRadius * Math.cos(startAngle)} ${segRadius * Math.sin(startAngle)}`,
                `A ${segRadius} ${segRadius} 0 0 1 ${segRadius * Math.cos(endAngle)} ${segRadius * Math.sin(endAngle)}`,
                `Z`,
              ].join(" ");

              const tx =
                Math.cos((startAngle + endAngle) / 2) * segRadius * 0.6;
              const ty =
                Math.sin((startAngle + endAngle) / 2) * segRadius * 0.6;

              return (
                <g key={seg.id}>
                  {/* segment chính */}
                  <path
                    d={d}
                    fill={fillColor}
                    stroke="#E6E7E8"
                    strokeWidth="2"
                  />

                  {/* border cách tâm 80px */}
                  <path
                    d={borderPath}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="4"
                  />

                  {/* label */}
                  {/* label — cho phép xuống dòng */}
                  <foreignObject
                    x={tx - 50} // -nửa width để căn giữa
                    y={ty - 50} // -nửa height để căn giữa
                    width={100} // 👈 Giới hạn chiều rộng của text
                    height={100} // 👈 Chiều cao tối đa
                    transform={`rotate(${i * segAngle + segAngle / 2}, ${tx}, ${ty})`}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: seg.textColor,
                        width: "100%",
                        height: "100%",
                        lineHeight: "1.2",
                        wordWrap: "break-word",
                        overflow: "hidden",
                        padding: "0 2px",
                      }}
                    >
                      {seg.label}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {Array.from({ length: segCount }).map((_, i) => {
              // Góc giữa mỗi segment
              const angle = (i * segAngle + segAngle / 2) * (Math.PI / 180);

              const dotRadius = radius - 10; // hoặc segRadius + 10 nếu muốn gần segment hơn

              // Tính toạ độ
              const cx = Math.cos(angle) * dotRadius;
              const cy = Math.sin(angle) * dotRadius;

              return (
                <foreignObject
                  key={`dot-${i}`}
                  x={cx - 4}
                  y={cy - 4}
                  width={8}
                  height={8}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(50% 50% at 50% 50%, #FFFFBB 0%, #E1B141 100%)",
                      boxShadow: "0 0 6px rgba(255, 220, 100, 0.8)",
                    }}
                  />
                </foreignObject>
              );
            })}
          </g>
        </svg>
      </div>

      {/* nút quay */}

      <button
        onClick={() => {
          const random = Math.floor(Math.random() * segments.length);
          spin(random ?? null);
        }}
        disabled={spinning}
        style={{
          position: "absolute",
          left: "50%",
          top: "calc(50% - 10px)",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          width: 61,
          cursor: spinning ? "not-allowed" : "pointer",
          zIndex: 10,
        }}
      >
        <img src={PinWheel} className="h-full w-full" />
      </button>
    </div>
  );
}
