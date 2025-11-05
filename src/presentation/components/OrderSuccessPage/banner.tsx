import React from "react";
import OrderSuccessImg from "../../static/images/order-success.png";

export const Banner = () => {
  return (
    <div className="flex justify-center">
      <img src={OrderSuccessImg} className="h-[145px] object-contain" />
    </div>
  );
};
