import React from "react";
import { MemberCard } from "../common/member-cards";
import { Navigation } from "./navigation";
import { PromoBanner } from "./promo-banner";
import { Categories } from "./categories";
import { Products } from "./products";

const Content = () => {
  return (
    <div className="relative z-[10] flex w-full flex-col gap-[20px] pb-[20px]">
      <div className="fixed inset-x-0 -z-[10] h-[80px] rounded-b-[4px] bg-green6" />
      <div className="flex flex-col gap-[16px] px-[16px] pt-[16px]">
        <MemberCard type="gold" />
        <Navigation />
        <PromoBanner />
      </div>
      <Categories />
      <div className="px-[16px]">
        <Products />
      </div>
    </div>
  );
};

export default Content;
