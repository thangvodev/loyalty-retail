import React from "react";
import NotiIcon from "../../static/icons/noti-icon.png";

export const PointRewardRating = () => {
  return (
    <div className="flex items-center gap-[9px] rounded-[8px] bg-orange5 p-[10px]">
      <img src={NotiIcon} alt="" className="size-[32px] shrink-0" />
      <div className="flex flex-col gap-[4px]">
        <div className="text-sm font-medium text-white">
          Nhận điểm khi đánh giá đơn hàng
        </div>
        <div className="text-xs font-normal text-white">
          Chia sẻ trải nghiệm của bạn và nhận ngay 150 điểm
        </div>
      </div>
    </div>
  );
};
