import React from "react";
import { Filter } from "./voucher-filter";
import PromotionImg from "../../static/images/promotion.jpg";
import TicketOutlineIcon from "../../static/icons/ticket-outline.png";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import ClockIcon from "../icons/ClockIcon";

const Vouchers = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <Filter />
      <VoucherList />
    </div>
  );
};

const VoucherList = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <VoucherListItem key={index} />
      ))}
    </div>
  );
};

const VoucherListItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex shrink-0 snap-start flex-col overflow-hidden rounded-[12px] bg-white"
      onClick={() => navigate("/voucher-details")}
    >
      <div className="relative h-[100px] w-full">
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
        <div className="line-clamp-1 text-xs font-semibold">
          Voucher giảm 50%
        </div>
        <div className="line-clamp-1 text-2xs font-normal text-gray6">
          Tối đa cho đơn 100k
        </div>
        <div className="flex items-center gap-[4px]">
          <ClockIcon className="size-[14px] text-red6" />
          <div className="text-2xs font-normal text-red6">HSD: 22/07/2024</div>
        </div>
        <Button
          text={<div className="text-2xs font-normal text-white">Đổi ngay</div>}
          className="h-[22px] flex-none rounded-[24px] bg-green6"
        />
      </div>
    </div>
  );
};

export { Vouchers };
