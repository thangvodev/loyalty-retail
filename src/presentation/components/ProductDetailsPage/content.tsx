import React from "react";
import { Banner } from "./banner";
import { Details } from "./details";
import { Title } from "./title";
import { Promotions } from "./promotions";
import { CartFloat } from "./cart-float";

const Content = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <Banner />
      <div className="flex flex-col gap-[16px] px-[16px]">
        <Title />
        <Promotions />
        <Details />
      </div>
      <CartFloat />
    </div>
  );
};

export default Content;
