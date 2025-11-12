import React from "react";
import { Button } from "../common/button";
import PromotionImg from "../../static/images/promotion.jpg";
import CoinIcon from "../../static/icons/coin-gold.png";
import TicketOutlineIcon from "../../static/icons/ticket-outline.png";

const Promotions = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center justify-between px-[16px]">
        <div className="text-lg font-medium">Ưu đãi nổi bật</div>
        <Button
          text={
            <div className="text-2xs font-normal text-white">Xem tất cả</div>
          }
          className="h-[22px] flex-none rounded-[24px] bg-green6 px-[6px]"
        />
      </div>
      <div className="flex snap-x scroll-px-[16px] gap-[12px] overflow-auto px-[16px]">
        {Array.from({ length: 10 }).map((_, index) => (
          <PromotionItem key={index} />
        ))}
      </div>
    </div>
  );
};

const PromotionItem = () => {
  return (
    <div className="flex shrink-0 snap-start flex-col overflow-hidden rounded-[12px] bg-white">
      <div className="relative h-[100px] w-[160px]">
        <div
          className="absolute right-[6px] top-[6px] flex size-[24px] items-center justify-center rounded-full bg-white p-[4.8px]"
          style={{
            boxShadow:
              "0px 1.6px 3.2px 0px #0000000A, 0px 0.8px 0.8px 0px #00000005",
          }}
        >
          <img
            src={TicketOutlineIcon}
            alt=""
            className="size-[14.4px] object-contain"
          />
        </div>
        <img src={PromotionImg} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[5px] px-[12px] py-[10px]">
        <div className="text-xs font-semibold">Voucher giảm 50%</div>
        <div className="text-2xs font-normal text-gray6">
          Tối đa cho đơn 100k
        </div>
        <div className="flex items-center gap-[4px]">
          <img src={CoinIcon} alt="" className="size-[14px]" />
          <div className="text-xs font-normal text-red5">500 điểm</div>
        </div>
      </div>
    </div>
  );
};

export { Promotions };
