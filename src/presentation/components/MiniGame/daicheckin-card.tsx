import React from "react";
import CoinIcon from "../../static/icons/coin-gold.png";
import CheckedDailyIcon from "../../static/icons/checked-daily-icon.png";

interface DayItem {
  day: string;
  reward: string;
  checked: boolean;
  isToday?: boolean;
}

interface DailyCheckinCardProps {
  days: DayItem[];
  onCheckin: () => void;
}

const DailyCheckinCard: React.FC<DailyCheckinCardProps> = ({
  days,
  onCheckin,
}) => {
  return (
    <div
      className="mt-3 rounded-2xl bg-white px-[11px] pb-3 text-center"
      style={{
        boxShadow: "0px 4px 12px 0px #DAE9EC87",
      }}
    >
      {/* Header */}
      <div
        className="inline-block h-[33px] rounded-full px-[18px] py-2 text-sm font-semibold text-white"
        style={{
          transform: "translateY(-16.5px)",
          background: "linear-gradient(270deg, #48E364 0%, #20AE00 100%)",
          boxShadow:
            "2.33px -2.33px 14px 0px #C6FFE0 inset, 0px 2.33px 14px 0px #2C7B6824 ",
        }}
      >
        Điểm danh nhận điểm mỗi ngày
      </div>

      {/* Days */}
      <div className="flex justify-between gap-2 overflow-x-auto overflow-y-hidden pt-[3.5px] hide-scrollbar">
        {days.map((d, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-between whitespace-nowrap rounded-[8px] border px-2 py-[6px] ${
              d.checked
                ? "bg-green1"
                : d.isToday
                  ? "border-orange4"
                  : "bg-yellow1"
            }`}
            style={
              d.isToday && !d.checked
                ? {
                    background:
                      "linear-gradient(180deg, #FAF8EA 0%, #FFE7B7 100%)",
                  }
                : {}
            }
          >
            <span className={`text-[10px] font-semibold text-orange8`}>
              {d.day}
            </span>

            <img
              src={d?.checked ? CheckedDailyIcon : CoinIcon}
              alt="coin"
              className="mt-2 h-[22px] w-[22px]"
            />

            {/* Checked label */}
            {d.checked ? (
              <span className="mt-1 rounded-[16px] border-[0.87px] border-green5 bg-white px-[2.67px] py-[1.33px] text-[8px] font-semibold text-green5">
                Đã nhận
              </span>
            ) : (
              <span className="border-orange4 mt-1 min-w-[30.67px] rounded-[16px] border-[0.87px] bg-yellow1 px-[2.67px] py-[1.33px] text-[8px] font-semibold text-red5">
                {d.reward}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={onCheckin}
        className="mt-5 size-fit rounded-full bg-orange6 px-6 py-[6px] font-semibold text-white transition active:scale-[0.98]"
      >
        Điểm danh nhận xu
      </button>
    </div>
  );
};

export default DailyCheckinCard;
