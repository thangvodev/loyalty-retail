import React, { useRef, useState } from "react";
import PinWheel from "../../static/images/pin-wheel.png";
import Wheel from "../../static/images/wheel.png";

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
};

export default function LuckyWheel1({
  segments,
  size = 320,
  spinDuration = 5,
  onFinish,
  winnerIndex = null,
  easing = "cubic-bezier(0.33,1,0.68,1)",
}: LuckyWheelProps) {
  const segCount = segments.length;
  const segAngle = 360 / segCount;
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const spinCountRef = useRef(0);
  const isSpinningRef = useRef(false);

  const getTargetRotationForIndex = (index: number) => {
    const centerAngle = index * segAngle + segAngle / 2;
    const target = (270 - centerAngle + 360) % 360;
    return target;
  };

  const spin = (forcedIndex?: number | null) => {
    if (isSpinningRef.current) return;
    if (forcedIndex == null) return;

    isSpinningRef.current = true;

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
      isSpinningRef.current = false;
      if (onFinish) onFinish(segments[chosenIndex], chosenIndex);
    }, spinDuration * 1000);
  };

  const radius = size / 2;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        margin: "0 auto",
        boxSizing: "content-box",
        backgroundImage: `url(${Wheel})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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

              const labelLength = seg.label.length;
              const maxChars = 20; // tối đa 20 ký tự hiển thị
              const displayLabel =
                labelLength > maxChars
                  ? seg.label.slice(0, maxChars - 3) + "..."
                  : seg.label;

              const baseFontSize = 13;
              const fontSize =
                labelLength <= 10
                  ? baseFontSize
                  : Math.max(baseFontSize - (labelLength - 10) * 0.4, 8); // tối thiểu 8px

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
          </g>
        </svg>
      </div>

      {/* nút quay */}

      <button
        onClick={() => {
          spin(winnerIndex ?? null);
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "calc(50% - 10px)",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          width: 61,
          zIndex: 10,
        }}
      >
        <img src={PinWheel} className="h-full w-full" />
      </button>
    </div>
  );
}
