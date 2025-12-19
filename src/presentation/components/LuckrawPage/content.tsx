import React, { useState, useRef, useEffect, useMemo } from "react";
import LuckyWheel from "./lucky-wheel";
import BgLucky1 from "../../static/images/bg-;ucky-1.png";
import BgLucky2 from "../../static/images/bg-lucky-2.png";
import BgLuckyCoin from "../../static/images/bg-lucky-coin.png";
import CoinIcon from "../../static/icons/coin-gold.png";
import LuckyWheel1 from "./lucky-wheel-1";
import WinPrizeModal from "./win-prize-modal";

interface Segment {
  id: number;
  label: string;
  backgroundColor: string;
  textColor: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Content: React.FC = () => {
  const [segments, setSegments] = useState<Segment[]>([]);

  const [winnerId, setWinnerId] = useState<number | null>(1);
  const [pendingResult, setPendingResult] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [optionLuckyDraw, setOptionLuckyDraw] = useState<number>(1);

  const wheelRef = useRef<HTMLDivElement>(null);
  const [winPrizeVisible, setWinPrizeVisible] = useState(false);

  useEffect(() => {
    if (optionLuckyDraw === 1) {
      setSegments(fakeSegment1);
    } else {
      setSegments(fakeSegment2);
    }
  }, [optionLuckyDraw]);

  const winnerIndex = useMemo(() => {
    let index;
    if (optionLuckyDraw === 1) {
      index = fakeSegment1.findIndex((seg) => seg.id === winnerId);
    } else {
      index = fakeSegment2.findIndex((seg) => seg.id === winnerId);
    }
    return index != -1 ? index : null;
  }, [winnerId]);

  return (
    <div
      className="flex h-full flex-col items-center overflow-x-hidden bg-cover bg-center bg-no-repeat px-7 pb-10 pt-14 font-sans text-white hide-scrollbar"
      style={{
        backgroundImage: `url(${optionLuckyDraw === 1 ? BgLucky1 : BgLucky2})`,
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

      <WinPrizeModal
        popupVisible={winPrizeVisible}
        setPopupVisible={setWinPrizeVisible}
        winner={{}}
        count={1}
      />

      {/* Vòng quay */}
      {optionLuckyDraw === 1 ? (
        <>
          <div
            ref={wheelRef}
            className="relative z-10 aspect-square max-w-full"
            style={{
              transform: "translateX(calc(-28px - (300px - 50vw)",
            }}
          >
            <LuckyWheel1
              size={600}
              segments={segments}
              winnerIndex={winnerIndex}
              setWinPrizeVisible={setWinPrizeVisible}
            />
          </div>
        </>
      ) : (
        <>
          <div
            ref={wheelRef}
            className="relative z-10 aspect-square max-w-full"
          >
            <LuckyWheel
              size={320}
              segments={segments}
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
        </>
      )}
    </div>
  );
};

export default Content;

const fakeSegment1: Segment[] = [
  {
    id: 1,
    label: "Voucher 15%",
    backgroundColor: "#EBFFF5",
    textColor: "#66ECA7",
  },
  {
    id: 2,
    label: "100",
    backgroundColor: "#5CE59E",
    textColor: "#FFFFFF",
    suffix: <img src={CoinIcon} className="ml-[5px] size-[20px]" />,
  },
  {
    id: 3,
    label: "Chúc bạn may mắn",
    backgroundColor: "#EBFFF5",
    textColor: "#66ECA7",
  },
  {
    id: 4,
    label: "300",
    backgroundColor: "#5CE59E",
    textColor: "#FFFFFF",
    suffix: <img src={CoinIcon} className="ml-[5px] size-[20px]" />,
  },
  {
    id: 5,
    label: "1x Gối kê cổ cam đáng yêu",
    backgroundColor: "#EBFFF5",
    textColor: "#66ECA7",
    prefix: <img src={CoinIcon} className="mr-[5px] size-[20px]" />,
  },
  {
    id: 6,
    label: "500",
    backgroundColor: "#5CE59E",
    textColor: "#FFFFFF",
    suffix: <img src={CoinIcon} className="ml-[5px] size-[20px]" />,
  },
  {
    id: 7,
    label: "Voucher 20%",
    backgroundColor: "#EBFFF5",
    textColor: "#66ECA7",
  },
  {
    id: 8,
    label: "1x Gối kê cổ cam đáng yêu",
    backgroundColor: "#5CE59E",
    textColor: "#FFFFFF",
    prefix: <img src={CoinIcon} className="mr-[5px] size-[20px]" />,
  },
];

const fakeSegment2: Segment[] = [
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
];
