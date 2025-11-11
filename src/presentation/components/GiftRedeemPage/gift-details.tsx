import React from "react";
import GiftImg from "../../static/images/gift.jpg";
import { Divider } from "antd";

const GiftDetails = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-[12px] bg-white">
      <GiftList />
    </div>
  );
};

const GiftList = () => {
  return (
    <div className="flex flex-col gap-[12px] p-[12px]">
      {Array.from({ length: 1 }).map((_, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex items-center gap-[12px]">
              <div className="relative size-[80px] overflow-hidden rounded-[6px]">
                <img
                  src={GiftImg}
                  alt=""
                  className="size-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-sm font-normal">
                  Áo giữ nhiệt mỏng mùa đông
                </div>
                <div className="text-xs font-normal text-gray5">Q1E12</div>
                <div className="text-xs font-normal text-gray8">SL:1</div>
              </div>
            </div>
            {index < 0 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { GiftDetails };
