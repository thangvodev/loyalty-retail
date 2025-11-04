import React, { useRef, useState } from "react";
import PinWheel from "../../static/images/pin-wheel.png";
import PinWheelBg2 from "../../static/images/pin-whell-bg-2.png";

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
  setWinPrizeVisible?: (v: boolean) => void;
};

export default function LuckyWheel1({
  segments,
  size = 320,
  spinDuration = 5,
  onFinish,
  winnerIndex = null,
  easing = "cubic-bezier(0.33,1,0.68,1)",
  spinning = false,
  setSpinning,
  setWinPrizeVisible,
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
      if (setWinPrizeVisible) {
        setWinPrizeVisible(true);
      }
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
        boxSizing: "content-box",
        background: "linear-gradient(180deg, #42FF9E 0%, #9DFFCC 19.45%)",
        boxShadow: "0px 12px 0px 0px #4FB7815C",
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
        <svg width={radius * 2} height={radius * 2}>
          <g transform={`translate(${radius},${radius})`}>
            {segments.map((seg, i) => {
              const segRadius = radius - 40;
              const borderRadius = 52;
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

              const labelLength = seg.label.length;
              const maxChars = 20;
              const displayLabel =
                labelLength > maxChars
                  ? seg.label.slice(0, maxChars - 3) + "..."
                  : seg.label;

              const baseFontSize = 13;
              const fontSize =
                labelLength <= 10
                  ? baseFontSize
                  : Math.max(baseFontSize - (labelLength - 10) * 0.4, 8);

              return (
                <g key={seg.id}>
                  {/* Segment chính */}
                  <path d={d} fill={fillColor} strokeWidth="0" />

                  {/* label */}
                  <foreignObject
                    x={tx - 50}
                    y={ty - 50}
                    width={100}
                    height={100}
                    transform={`rotate(${i * segAngle + segAngle / 2}, ${tx}, ${ty})`}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: `${fontSize}px`,
                        color: seg.textColor,
                        width: "100%",
                        height: "100%",
                        lineHeight: "1.2",
                        wordWrap: "break-word",
                        overflow: "hidden",
                        padding: "0 2px",
                      }}
                    >
                      {displayLabel}
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Shadow viên ngoài vòng (layer 1) */}
            <circle
              cx={0}
              cy={0}
              r={radius - 40} // lớn hơn border 1 chút
              fill="none"
              stroke="#4FB7813C"
              strokeWidth="15"
            />
            {/* Shadow viên ngoài vòng (layer 2) */}
            <circle
              cx={0}
              cy={0}
              r={radius - 42}
              fill="none"
              stroke="#4FB7815C"
              strokeWidth="10"
            />
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
          width: 106,
          cursor: spinning ? "not-allowed" : "pointer",
          zIndex: 10,
        }}
      >
        <div className="relative">
          <img src={PinWheelBg2} className="h-full w-full" />

          <div
            className="absolute bottom-[14px] left-1/2 flex size-[86px] -translate-x-1/2 flex-col items-center justify-center rounded-full text-[19.35px] font-extrabold"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #1DC36D 0%, #81FEBD 100%)",
              boxShadow: "0px 7.27px 0px 0px #30D37F",
            }}
          >
            QUAY{" "}
            <div className="pt-[2px] text-center text-[11px] font-medium text-white">
              Còn <span className="text-[13px] font-bold">{1}</span> lượt
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
