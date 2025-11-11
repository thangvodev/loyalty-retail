import React from "react";
import FlashSaleIcon from "../../static/icons/flash-sale.png";
import GiftIcon from "../../static/icons/gift.png";
import GiftTradeIcon from "../../static/icons/gift-trade.png";
import ShareIcon from "../../static/icons/share.png";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-between rounded-[12px] bg-white px-[20px] py-[10px]"
      style={{ boxShadow: "0px 4px 12px 0px #DAE9EC87" }}
    >
      <div
        className="flex flex-col items-center gap-[4px]"
        onClick={() => navigate("/flash-sale")}
      >
        <img src={FlashSaleIcon} alt="" className="size-[20px]" />
        <div className="text-2xs font-normal text-gray8">Flash sale</div>
      </div>
      <div
        className="flex flex-col items-center gap-[4px]"
        onClick={() => navigate("/gift-wallet")}
      >
        <img src={GiftIcon} alt="" className="size-[20px]" />
        <div className="text-2xs font-normal text-gray8">Ví quà</div>
      </div>
      <div
        className="flex flex-col items-center gap-[4px]"
        onClick={() => navigate("/point-redeem")}
      >
        <img src={GiftTradeIcon} alt="" className="size-[20px]" />
        <div className="text-2xs font-normal text-gray8">Đổi quà</div>
      </div>
      <div className="flex flex-col items-center gap-[4px]">
        <img src={ShareIcon} alt="" className="size-[20px]" />
        <div className="text-2xs font-normal text-gray8">Chia sẻ</div>
      </div>
    </div>
  );
};
