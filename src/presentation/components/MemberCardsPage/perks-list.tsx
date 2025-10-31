import React from "react";
import { Divider } from "antd";
import GiftIcon from "../../static/icons/gift-red.png";

const PerksList = () => {
  return (
    <div
      className="flex flex-col gap-[20px] rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
    >
      <div className="text-[15px] font-medium text-gray8">Các quyền lợi</div>
      <div className="flex flex-col gap-[20px]">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <React.Fragment key={index}>
              <PerksListItem />
              {index < 2 ? <Divider dashed className="m-0" /> : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const PerksListItem = () => {
  return (
    <div className="flex gap-[12px]">
      <div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-orange1">
        <img src={GiftIcon} alt="" className="size-[20px]" />
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="text-[15px] font-medium">Ưu đãi 1</div>
        <div className="text-xs font-normal text-gray8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </div>
      </div>
    </div>
  );
};

export { PerksList };
