import React, { FC } from "react";
import FlashSaleFlameIcon from "../../static/icons/flash-sale-flame.png";

const Title = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-[4px]">
        <img
          src={FlashSaleFlameIcon}
          alt=""
          className="size-[24px] object-contain"
        />
        <div className="text-base font-medium">Flash sale</div>
      </div>
      <div className="flex items-center gap-[8px]">
        <div className="text-sm font-normal text-gray7">Kết thúc trong</div>
        <div className="flex items-center gap-[4px]">
          <TimeBox time={"01"} />
          <span className="text-sm font-normal">:</span>
          <TimeBox time={"02"} />
          <span className="text-sm font-normal">:</span>
          <TimeBox time={"12"} />
        </div>
      </div>
    </div>
  );
};

const TimeBox: FC<{ time: string }> = ({ time }) => {
  return (
    <div
      className="flex size-[22px] items-center justify-center rounded-[4px]"
      style={{
        background: "linear-gradient(90deg, #E86543 0%, #FFC684 100%)",
      }}
    >
      <span className="text-sm font-normal text-white">{time}</span>
    </div>
  );
};

export { Title };
