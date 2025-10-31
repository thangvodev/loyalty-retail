import React from "react";
import SaleImg from "../../static/images/product.jpg";
import { Divider, Progress } from "antd";
import { Button } from "../common/button";
import { formatCurrency } from "../../utils/helpers";
import CoinIcon from "../../static/icons/coin-gold.png";

const SaleList = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <SaleListItem key={index} />
      ))}
    </div>
  );
};

const SaleListItem = () => {
  return (
    <div className="flex items-center gap-[10px] rounded-[12px] bg-[#FFF5EE] px-[10px] py-[8px]">
      <img
        src={SaleImg}
        alt=""
        className="size-[73px] rounded-[8px] object-cover object-top"
      />
      <div className="flex flex-1 flex-col gap-[2px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-sm font-normal text-gray8">
            Váy công sở Gumac
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="text-base font-semibold text-red6">
              {formatCurrency(199000)}
            </div>
            <div className="text-2xs font-normal text-gray7 line-through">
              {formatCurrency(250000)}
            </div>
          </div>
        </div>
        <Progress
          size={{ height: 7, width: 138 }}
          percent={50}
          strokeColor={{ "0%": "#F1A18C", "100%": "#FFE4DC" }}
          trailColor="#FAEEEA"
          className="leading-[0]"
          format={(percent) => (
            <div className="text-2xs font-normal text-red6">3/5</div>
          )}
        />
        <div className="flex items-center gap-[4px]">
          <img src={CoinIcon} alt="" className="size-[14px]" />
          <div className="text-2xs font-normal text-gray7">+500 điểm</div>
        </div>
      </div>
      <div className="relative h-full">
        <div className="absolute -top-[8px] left-0 size-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F9FB]" />
        <div className="absolute -bottom-[8px] left-0 size-[14px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#F5F9FB]" />
        <Divider dashed type="vertical" className="m-0 h-full" />
      </div>
      <Button
        text={<div className="text-2xs font-normal text-white">Mua</div>}
        className="flex h-[22px] w-[36px] flex-none items-center justify-center rounded-[24px] bg-red5"
      />
    </div>
  );
};

export { SaleList };
