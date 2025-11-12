import React from "react";
import PresentIcon from "../../static/icons/gift-color.png";
import CoinIcon from "../../static/icons/coin-gold.png";

export const Rewards = () => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] bg-white p-[12px]">
      <div className="flex items-center gap-[4px] rounded-[8px] border border-dashed border-red4 px-[12px] py-[10px]">
        <img src={PresentIcon} className="size-[16px]" />
        <div className="text-xs font-normal text-red6">
          Tặng voucher 20% khi mua đơn hàng trên 200k
        </div>
      </div>
      <div className="flex items-center gap-[4px] rounded-[8px] border border-dashed border-red4 px-[12px] py-[10px]">
        <img src={CoinIcon} className="size-[16px]" />
        <div className="text-xs font-normal text-red6">
          + 200 điểm khi hoàn thành đơn hàng
        </div>
      </div>
    </div>
  );
};
