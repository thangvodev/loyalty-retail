import React from "react";
import QRCode from "../../static/images/qr.png";
import CoinIcon from "../../static/icons/coin-gold.png";
import { Divider } from "antd";

export const QR = () => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[20px]"
      style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
    >
      <div className="flex flex-col items-center gap-[12px] bg-white px-[43px] pb-[12px] pt-[32px]">
        <img src={QRCode} alt="" className="w-[220.12px]" />
        <div className="text-sm font-medium text-gray6">ID: 23490835843587</div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 size-[16px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray1" />
        <div className="absolute right-0 top-0 size-[16px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gray1" />
        <Divider dashed className="m-0 border-[1.5px]" />
      </div>
      <div className="flex items-center justify-center gap-[4px] bg-white px-[43px] pb-[24px] pt-[12px]">
        <div className="text-xs font-normal text-gray7">Bạn đang có</div>
        <div className="flex items-center gap-[4px]">
          <div className="text-sm font-semibold text-[#694D17]">5,500</div>
          <img src={CoinIcon} alt="" className="size-[16px]" />
        </div>
      </div>
    </div>
  );
};
