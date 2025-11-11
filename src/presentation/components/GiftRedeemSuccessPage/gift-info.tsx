import { Divider } from "antd";
import React from "react";
import GiftImg from "../../static/images/gift.jpg";
import { useNavigate } from "react-router-dom";

export const GiftInfo = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col items-center gap-[8px]">
        <div className="text-lg font-medium">Xác nhận nhận quà thành công</div>
        <div className="text-pretty text-center text-sm font-normal text-gray7">
          Món quà của bạn sẽ được giao trong vòng 1 - 2 ngày tới.
        </div>
      </div>
      <div className="flex flex-col rounded-[12px] bg-white">
        <GiftList />
      </div>
    </div>
  );
};

const GiftList = () => {
  return (
    <div className="flex flex-col gap-[12px] p-[10px]">
      {Array.from({ length: 1 }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Gift */}
          <GiftListItem />
          {index < 0 ? <Divider className="m-0" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const GiftListItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-[12px]"
      onClick={() => navigate("/orders/1")}
    >
      <div className="relative size-[80px] overflow-hidden rounded-[6px]">
        <img
          src={GiftImg}
          alt=""
          className="size-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-sm font-normal">Áo giữ nhiệt mỏng mùa đông</div>
        <div className="text-xs font-normal text-gray5">Q1E12</div>
        <div className="text-xs font-normal text-gray8">SL:1</div>
      </div>
    </div>
  );
};
