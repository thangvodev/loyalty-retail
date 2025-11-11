import React from "react";
import { Filter } from "./gift-filter";
import GiftImg from "../../static/images/gift.jpg";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import PresentIcon from "../icons/PresentIcon";

const Gifts = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <Filter />
      <GiftList />
    </div>
  );
};

const GiftList = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <GiftListItem key={index} />
      ))}
    </div>
  );
};

const GiftListItem = () => {
  const status = 1;
  const navigate = useNavigate();

  return (
    <div
      className="flex shrink-0 snap-start flex-col overflow-hidden rounded-[12px] bg-white"
      onClick={() => navigate("/gift-details")}
    >
      <div className="relative h-[160px] w-full">
        <div
          className="absolute right-[6px] top-[6px] flex size-[24px] items-center justify-center rounded-full bg-white p-[4.8px]"
          style={{
            boxShadow:
              "0px 1.6px 3.2px 0px #0000000A, 0px 0.8px 0.8px 0px #00000005",
          }}
        >
          <PresentIcon className="size-[14.4px] text-green6" />
        </div>
        <img src={GiftImg} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[5px] px-[12px] py-[10px]">
        <div className="line-clamp-1 text-xs font-semibold">
          Áo giữ nhiệt mỏng mùa đông
        </div>
        <div className="line-clamp-1 text-2xs font-normal text-gray6">
          Quà tặng cho đơn hàng trên 100k
        </div>
        {statusMap[status]({
          onClick: (e: React.MouseEvent) => {
            e.stopPropagation();
            navigate("/gift-redeem");
          },
        })}
      </div>
    </div>
  );
};

export { Gifts };

const statusMap: Record<number, (props: any) => React.ReactNode> = {
  1: (props) => (
    <Button
      text={<div className="text-2xs font-normal text-white">Nhận quà</div>}
      className="h-[22px] flex-none rounded-[24px] bg-green6"
      {...props}
    />
  ),
  2: () => (
    <div className="flex h-[26px] w-fit items-center justify-center rounded-[24px] bg-yellow1 px-[5px]">
      <div className="text-xs font-medium text-yellow8">Đang giao hàng</div>
    </div>
  ),
  3: () => (
    <div className="flex h-[26px] w-fit items-center justify-center rounded-[24px] bg-green1 px-[5px]">
      <div className="text-xs font-medium text-green6">Đã nhận</div>
    </div>
  ),
};
