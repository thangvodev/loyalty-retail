import React, { useState } from "react";
import BannerImg from "../../static/images/promotion.jpg";
import { VoucherDetails } from "./voucher-details";
import { RedeemFloat } from "./redeem-float";
import { SuccessPopup } from "./success-popup";

const Content = () => {
  const [status, setStatus] = useState<TStatus>("notRedeemed");
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState<boolean>(false);

  return (
    <div className="flex size-full flex-col">
      <div className="flex flex-1 flex-col pb-[14px]">
        <img
          src={BannerImg}
          alt=""
          className="h-[240px] w-full object-cover object-bottom"
          style={{ backdropFilter: "blur(12px)" }}
        />
        <VoucherDetails status={status} />
      </div>
      <RedeemFloat
        status={status}
        onRedeem={() => {
          setStatus("redeemed");
          setIsSuccessPopupOpen(true);
        }}
        onUse={() => setStatus("active")}
      />
      <SuccessPopup
        open={isSuccessPopupOpen}
        onClose={() => setIsSuccessPopupOpen(false)}
      />
    </div>
  );
};

export default Content;

type TStatus = "notRedeemed" | "redeemed" | "active" | "expired";
