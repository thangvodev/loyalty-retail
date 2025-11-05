import React from "react";
import { Button } from "../common/button";
import TicketIcon from "../../static/icons/ticket-sale.png";
import CoinIcon from "../../static/icons/coin-gold.png";

const PointHistoryList = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[12px]">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">Lịch sử gần đây</div>
        <Button
          text={
            <div className="text-2xs font-normal text-white">Xem tất cả</div>
          }
          className="h-[22px] flex-none rounded-[24px] bg-green6 px-[6px]"
        />
      </div>
      <div className="flex flex-col gap-[12px] overflow-auto">
        {Array.from({ length: 3 }).map((_, index) => (
          <PointHistoryListItem key={index} />
        ))}
      </div>
    </div>
  );
};

const PointHistoryListItem = () => {
  return (
    <div className="flex justify-between rounded-[12px] bg-white p-[12px]">
      <div className="flex items-center gap-[12px]">
        <div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-orange1">
          <img src={TicketIcon} alt="" className="p-[6px]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-sm font-medium">Đổi điểm thành công</div>
          <div className="text-xs font-medium text-gray7">
            Nhận voucher{" "}
            <span className="text-orange6">Giảm 50k cho đơn hàng từ 500k</span>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 flex-col justify-between">
        <div className="flex h-[25px] items-center justify-center gap-[4px] rounded-[24px] bg-gray1 px-[6px]">
          <div className="text-xs font-semibold text-[#694D17]">-140</div>
          <img src={CoinIcon} alt="" className="size-[14px]" />
        </div>
        <div className="text-[11px] font-medium text-gray6">09:20, 27/07</div>
      </div>
    </div>
  );
};

export { PointHistoryList };
