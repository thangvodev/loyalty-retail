import React, { useState } from "react";
import { WalletTabs } from "./tabs";
import { SearchBar } from "./search-bar";
import { Vouchers } from "./vouchers";
import { Gifts } from "./gifts";
import TicketSaleIcon from "../../static/icons/ticket-discount-yellow.png";
import GiftOpenIcon from "../../static/icons/gift-open.png";

const Content = () => {
  const [currentTab, setCurrentTab] = useState("1");

  return (
    <div className="flex h-fit w-full flex-col gap-[16px] px-[16px] py-[12px]">
      <WalletTabs
        tabs={tabs}
        activeTab={currentTab}
        onTabChange={setCurrentTab}
      />
      <SearchBar />
      <div>{tabs.find((tab) => tab.key === currentTab)?.children}</div>
    </div>
  );
};

export default Content;

const tabs = [
  {
    key: "1",
    label: "Ưu đãi của tôi",
    icon: TicketSaleIcon,
    children: <Vouchers />,
  },
  { key: "2", label: "Quà tặng", icon: GiftOpenIcon, children: <Gifts /> },
];
