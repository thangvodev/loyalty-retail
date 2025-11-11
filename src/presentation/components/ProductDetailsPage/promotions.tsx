import React from "react";
import PresentIcon from "../icons/PresentIconFilled";
import DeliveryIcon from "../icons/DeliveryIcon";
import ShippingIcon from "../icons/ShippingIcon";
import GiftIcon from "../../static/icons/gift-color.png";

export const Promotions = () => {
  return (
    <div className="flex flex-col rounded-[20px] bg-[#FFF8F0]">
      <div className="flex size-fit gap-[6px] rounded-br-[7.2px] rounded-tl-[7.2px] bg-[#F7895E] px-[6px] py-[2px]">
        <PresentIcon className="text-white" />
        <div className="text-2xs font-semibold text-white">Khuyến mãi</div>
      </div>
      <div className="flex flex-col gap-[8px] px-[12px] pb-[12px] pt-[4px]">
        <div className="flex items-center gap-[8px]">
          <div
            className="flex h-[20px] items-center justify-center whitespace-nowrap rounded-[40px] px-[4px] text-2xs font-normal text-white"
            style={{
              background: "linear-gradient(270deg, #E89543 0%, #FFB76F 100%)",
            }}
          >
            Giảm 50%
          </div>
          <div className="flex h-[20px] items-center justify-center whitespace-nowrap rounded-[40px] border border-red5 bg-white px-[4px] text-2xs font-normal text-red6">
            Giá membership
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex items-center gap-[8px]">
            <DeliveryIcon className="size-[15px] text-red5" />
            <div className="text-xs font-normal text-red6">
              Giao hàng hoả tốc
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <ShippingIcon className="size-[15px] text-red5" />
            <div className="text-xs font-normal text-red6">
              Freeship toàn quốc
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <img src={GiftIcon} className="size-[15px]" />
            <div className="text-xs font-normal text-red6">
              Tặng voucher 20% khi mua đơn hàng trên 200k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
