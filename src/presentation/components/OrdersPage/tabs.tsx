import React, { useState } from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { Orders } from "./orders";
import { OrdersHistory } from "./orders-history";

export const OrderTabs = () => {
  const [currentTabType, setCurrentTabType] =
    useState<keyof typeof tabTypes>("current");

  const currentTabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Chờ xác nhận",
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <Orders
            status="confirming"
            setCurrentTabType={() => setCurrentTabType("history")}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: "Chờ lấy hàng",
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <Orders
            status="confirmed"
            setCurrentTabType={() => setCurrentTabType("history")}
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Chờ giao hàng",
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <Orders
            status="delivering"
            setCurrentTabType={() => setCurrentTabType("history")}
          />
        </div>
      ),
    },
  ];

  const historyTabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Hoàn thành",
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <OrdersHistory status="delivered" />
        </div>
      ),
    },
    {
      key: "2",
      label: "Đã huỷ",
      children: (
        <div className="h-full min-h-0 overflow-auto pt-[12px]">
          <OrdersHistory status="canceled" />
        </div>
      ),
    },
  ];

  const tabTypes = {
    current: currentTabs,
    history: historyTabs,
  };

  return (
    <Tabs
      defaultActiveKey="1"
      className="custom-tabs min-h-0 flex-1"
      items={tabTypes[currentTabType]}
      tabBarStyle={{ background: "white" }}
      selectColor="#4CBA81"
    />
  );
};
