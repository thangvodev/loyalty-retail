import React from "react";
import { Banner } from "./banner";
import { FooterButton } from "./footer-button";
import { OrderInfo } from "./order-info";

const Content = () => {
  return (
    <div className="flex size-fit flex-col gap-[20px] p-[16px]">
      <div className="flex flex-1 flex-col gap-[12px]">
        <Banner />
        <OrderInfo />
      </div>
      <FooterButton />
    </div>
  );
};

export default Content;
