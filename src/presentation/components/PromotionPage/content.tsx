import React from "react";
import { MemberCard } from "../common/member-cards";
import { Navigation } from "./navigation";
import { Promotions } from "./promotions";
import { PointHistoryList } from "./point-history";

const Content = () => {
  return (
    <div className="flex w-full flex-col gap-[16px] pt-[16px]">
      <div className="px-[16px]">
        <MemberCard type="gold" />
      </div>
      <div className="px-[16px]">
        <Navigation />
      </div>
      <Promotions />
      <PointHistoryList />
    </div>
  );
};

export default Content;
