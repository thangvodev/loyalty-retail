import React from "react";
import CoinIcon from "../../static/icons/coin-gold.png";
import PresentIcon from "../../static/icons/gift-promotion.png";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

export const Points = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center">
      <div
        className="flex flex-1 items-center justify-center gap-[12px] rounded-[8px] bg-white py-[13px]"
        style={{ boxShadow: "-3px 0px 12px 0px #29574314" }}
      >
        <img src={CoinIcon} className="size-[24px]" />
        <div className="flex flex-col gap-[2px]">
          <div className="text-[11px] font-medium text-gray6">Điểm của tôi</div>
          <div className="text-sm font-semibold">500</div>
        </div>
      </div>
      <Divider
        dashed
        type="vertical"
        className="absolute left-1/2 top-1/2 m-0 h-[32px] -translate-x-1/2 -translate-y-1/2 border-r border-stroke2"
      />
      <div
        className="flex flex-1 items-center justify-center gap-[12px] rounded-[8px] bg-white py-[13px]"
        style={{ boxShadow: "3px 0px 12px 0px #29574314" }}
        onClick={() => navigate("/gift-wallet")}
      >
        <img src={PresentIcon} className="size-[24px]" />
        <div className="flex flex-col gap-[2px]">
          <div className="text-sm font-semibold">Ưu đãi của tôi</div>
          <div className="text-[11px] font-medium text-gray6">
            Xem ví quà tặng
          </div>
        </div>
      </div>
    </div>
  );
};
