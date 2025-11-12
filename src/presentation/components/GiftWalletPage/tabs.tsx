import React, { FC } from "react";
import { Button } from "../common/button";
import clsx from "clsx";

export const WalletTabs: TWalletTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-between gap-[12px]">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          onClick={() => onTabChange(tab.key)}
          text={
            <div className="flex items-center gap-[8px]">
              <img
                src={tab.icon}
                alt=""
                className="size-[20px] object-contain"
              />
              <div className="text-xs font-normal">{tab.label}</div>
            </div>
          }
          className={clsx(
            "h-[36px] rounded-[8px] border border-gray2 bg-white px-[12px]",
            { "!border-green5 !bg-green1": activeTab === tab.key },
          )}
        />
      ))}
    </div>
  );
};

type TWalletTabs = FC<{
  tabs: Array<any>;
  activeTab: string;
  onTabChange: (tab: string) => void;
}>;
