import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import BxhIcon from "../../static/icons/bxh-icon.png";
import Top1Icon from "../../static/icons/top-1.png";
import TopIcon from "../../static/icons/top.png";
import CoinIcon from "../../static/icons/coin-gold.png";
import ArrowTop from "../../static/icons/arriw-top.png";
import ArrowBot from "../../static/icons/arrow-bot.png";

interface Player {
  id: number;
  name: string;
  avatar: string;
  points: number;
  rankChange?: "up" | "down";
}

interface LeaderboardProps {
  currentRank: number;
  players: Player[];
}

const LeaderboardCard: React.FC<LeaderboardProps> = ({
  currentRank,
  players,
}) => {
  const top3 = players.slice(0, 3);
  const others = players.slice(3);

  return (
    <div
      className="rounded-[12px] bg-white p-3"
      style={{
        boxShadow: "0px 4px 12px 0px #DAE9EC87",
      }}
    >
      <div className="items mb-4 flex items-center justify-center gap-1">
        <img src={BxhIcon} className="size-6" />
        <p className="text-[16px] font-medium text-[#212324]">Bảng xếp hạng</p>
      </div>

      <div className="mx-auto mb-2 w-fit rounded-full border border-red5 bg-white px-3 py-[6px] text-[14px] font-medium text-red5">
        Bạn đang ở vị trí số #{currentRank}
      </div>

      <div
        className="mb-2 flex rounded-[20px] p-2"
        style={{
          background: "linear-gradient(180deg, #FFE5BA 0%, #E4FFD3 100%)",
        }}
      >
        {top3.map((p, i) => (
          <div
            key={p.id}
            className={`flex flex-1 flex-col items-center gap-1 ${
              i === 0
                ? "order-2 pt-0"
                : i === 1
                  ? "order-3 pt-6"
                  : "order-1 pt-6"
            }`}
          >
            <div className="flex flex-col items-center">
              {/* Vương miện */}
              {i === 0 ? (
                <img src={Top1Icon} alt="Top 1" className="w-[26.67px]" />
              ) : (
                <img src={TopIcon} alt="Top crown" className="w-[26.67px]" />
              )}

              {/* Avatar */}
              <div
                className={`relative flex w-[58px] items-center justify-center rounded-full border-[3px] border-orange4`}
              >
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="h-full w-full rounded-full object-cover"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-orange4 bg-white px-[6px] py-[1.5px] text-[9px] font-semibold text-red5">
                  #{i + 1}
                </span>
              </div>
            </div>

            <p className="mt-3 text-[14px] font-semibold text-orange8">
              {p.name}
            </p>
            <div className="flex items-center gap-1 text-[13.5px] font-semibold text-orange6">
              {p.points}
              <img src={CoinIcon} className="size-[12px] min-w-[12px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 py-3">
        {others.map((p, i) => (
          <div
            key={p.id}
            className={`flex items-center rounded-[12px] p-3 ${
              p.id === currentRank
                ? "bg-orange1"
                : "transition hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-1 items-center">
              <div className="text-[16px] font-medium text-gray8">
                {String(i + 4).padStart(2, "0")}
              </div>
              <img
                src={p.avatar}
                alt={p.name}
                className="ml-[14px] size-10 min-w-10 rounded-full object-cover"
              />

              <div className="flex flex-col gap-1 pl-[12px]">
                <p className="text-[16px] font-semibold text-gray8">{p.name}</p>
                <div className="flex items-center gap-1 text-[16px] font-semibold text-orange6">
                  {p.points}
                  <img src={CoinIcon} className="size-[14px] min-w-[14px]" />
                </div>
              </div>
            </div>

            {p.rankChange === "up" && (
              <img src={ArrowTop} className="w-3 min-w-3" />
            )}
            {p.rankChange === "down" && (
              <img src={ArrowBot} className="w-3 min-w-3" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;
