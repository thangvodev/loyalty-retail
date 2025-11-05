import React from "react";
import { Banner } from "./banner";
import { Points } from "./points";
import { Vouchers } from "./vouchers";

const Content = () => {
  return (
    <div className="flex h-fit w-full flex-col gap-[20px] p-[16px]">
      <Banner />
      <div className="flex flex-col gap-[12px]">
        <Points />
        <Vouchers />
      </div>
    </div>
  );
};

export default Content;
