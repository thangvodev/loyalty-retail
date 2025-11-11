import React from "react";
import { Banner } from "./banner";
import { GiftInfo } from "./gift-info";

const Content = () => {
  return (
    <div className="flex size-fit flex-col gap-[12px] p-[16px]">
      <Banner />
      <GiftInfo />
    </div>
  );
};

export default Content;
