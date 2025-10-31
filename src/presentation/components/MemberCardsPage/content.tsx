import React, { useState } from "react";
import { MemberCard, MemberCardProps } from "../common/member-cards";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { PerksList } from "./perks-list";

const Content = () => {
  const [card, setCard] = useState<MemberCardProps["type"]>("member");

  return (
    <div className="relative z-[10] flex w-full flex-col gap-[20px] px-[16px] pb-[20px] pt-[14px]">
      <MemberCard type={card} canNavigate={false} />
      <Tabs
        items={items}
        className="custom-tabs h-full"
        selectColor="#50C889"
        margin={12}
        onChange={(key) => setCard(key as MemberCardProps["type"])}
      />
    </div>
  );
};

export default Content;

const items: TabsProps["items"] = [
  {
    key: "member",
    label: <div className="text-sm text-black">Member</div>,
    children: <PerksList />,
  },
  {
    key: "silver",
    label: <div className="text-sm text-black">Silver</div>,
    children: <PerksList />,
  },
  {
    key: "gold",
    label: <div className="text-sm text-black">Gold</div>,
    children: <PerksList />,
  },
  {
    key: "diamond",
    label: <div className="text-sm text-black">Diamond</div>,
    children: <PerksList />,
  },
];
