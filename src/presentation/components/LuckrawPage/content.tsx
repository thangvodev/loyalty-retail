import React, { useState, useRef } from "react";
import LuckyWheel from "./lucky-wheel";
import BgLucky2 from "../../static/images/bg-lucky-2.png";
import BgLuckyCoin from "../../static/images/bg-lucky-coin.png";

interface Segment {
  id: number;
  label: string;
  backgroundColor: string;
  textColor: string;
}

const Content: React.FC = () => {
  const [segments, setSegments] = useState<Segment[]>([
    {
      id: 1,
      label: "50",
      backgroundColor: "#F20000",
      textColor: "#FFFFFF",
    },
    {
      id: 2,
      label: "Chúc bạn may mắn lần sau",
      backgroundColor: "#F3F3E9",
      textColor: "#EC8368",
    },
    {
      id: 3,
      label: "200",
      backgroundColor: "#F20000",
      textColor: "#FFFFFF",
    },
    {
      id: 4,
      label: "1x Gối kê cổ cam đáng yêu",
      backgroundColor: "#F3F3E9",
      textColor: "#EC8368",
    },
    {
      id: 5,
      label: "500",
      backgroundColor: "#F20000",
      textColor: "#FFFFFF",
    },
    {
      id: 6,
      label: "Voucher 20%",
      backgroundColor: "#F3F3E9",
      textColor: "#EC8368",
    },
    {
      id: 7,
      label: "10",
      backgroundColor: "#F20000",
      textColor: "#FFFFFF",
    },
    {
      id: 8,
      label: "1x Gối kê cổ cam đáng yêu",
      backgroundColor: "#F3F3E9",
      textColor: "#EC8368",
    },
  ]);
  const [spinning, setSpinning] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [pendingResult, setPendingResult] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const wheelRef = useRef<HTMLDivElement>(null);

  const handleRandomResult = () => {
    if (segments.length === 0) return;
    const random = Math.floor(Math.random() * segments.length);
    setPendingResult(segments[random].label);
    setWinnerIndex(random);
    setResult(null);
  };

  const handleSpin = () => {
    if (winnerIndex === null || spinning) return;
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setResult(segments[winnerIndex].label);
    }, 4000); // thời gian quay
  };

  return (
    <div
      className="flex h-full flex-col items-center bg-cover bg-center bg-no-repeat px-7 pb-10 pt-14 font-sans text-white"
      style={{
        backgroundImage: `url(${BgLucky2})`,
      }}
    >
      <div
        className="mb-5 px-4 text-center text-[40px] font-extrabold text-white"
        style={{
          textShadow: "0px 4px 4px #388D6140",
        }}
      >
        Quay ngay nhận điểm
      </div>

      <div
        className="mb-8 inline-block h-[35px] rounded-full px-[18px] py-2 text-sm font-semibold text-white"
        style={{
          background: "linear-gradient(270deg, #48E364 0%, #20AE00 100%)",
          boxShadow:
            "2.33px -2.33px 14px 0px #C6FFE0 inset, 0px 2.33px 14px 0px #2C7B6824 ",
        }}
      >
        Bạn còn 1 lượt quay
      </div>

      {/* Vòng quay */}
      <div ref={wheelRef} className="relative z-10 aspect-square max-w-full">
        <LuckyWheel
          size={320}
          segments={segments}
          spinning={spinning}
          winnerIndex={winnerIndex}
        />
      </div>
      <div
        className="max-w-[320px] px-7"
        style={{
          transform: "translateY(-40px)",
        }}
      >
        <img src={BgLuckyCoin} className="h-full w-full" />
      </div>
      {/* <button
        onClick={handleRandomResult}
        disabled={spinning}
        className="mt-2 flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-red-600 shadow-md transition-all hover:bg-yellow-50 active:scale-95"
      >
        <Shuffle className="h-4 w-4" />
        Api {pendingResult}
      </button> */}
    </div>
  );
};

export default Content;
