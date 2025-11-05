import React from "react";
import BannerImg from "../../static/images/promotion.jpg";
import { VoucherDetails } from "./voucher-details";
import { RedeemFloat } from "./redeem-float";

const Content = () => {
  return (
    <div className="flex size-full flex-col">
      <div className="flex flex-1 flex-col pb-[14px]">
        <img
          src={BannerImg}
          alt=""
          className="h-[240px] w-full object-cover object-bottom"
          style={{ backdropFilter: "blur(12px)" }}
        />
        <VoucherDetails />
      </div>
      <RedeemFloat />
    </div>
  );
};

export default Content;
