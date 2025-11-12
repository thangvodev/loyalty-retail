import React from "react";
import GiftRedeemSuccessImg from "../../static/images/gift-redeem.png";

export const Banner = () => {
  return (
    <div className="flex justify-center">
      <img src={GiftRedeemSuccessImg} className="h-[145px] object-contain" />
    </div>
  );
};
