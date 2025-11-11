import React, { useState } from "react";
import BannerImg from "../../static/images/promotion.jpg";
import { GiftDetails } from "./gift-details";
import { SuccessPopup } from "./success-popup";

const Content = () => {
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
        <GiftDetails status={"expired"} />
      </div>
      <SuccessPopup
        open={isSuccessPopupOpen}
        onClose={() => setIsSuccessPopupOpen(false)}
      />
    </div>
  );
};

export default Content;
