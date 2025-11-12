import React from "react";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { PointHistoryList } from "./point-history-list";

export const PointHistoryTabs = () => {
  return (
    <Tabs
      items={items}
      className="custom-tabs size-full"
      selectColor="#50C889"
      margin={12}
      tabBarStyle={{ background: "#FFFFFF" }}
    />
  );
};

const items: TabsProps["items"] = [
  {
    key: "member",
    label: "Tích điểm",
    children: <PointHistoryList />,
  },
  {
    key: "silver",
    label: "Đổi điểm",
    children: <PointHistoryList />,
  },
  {
    key: "gold",
    label: "Thăng hạng",
    children: <PointHistoryList />,
  },
];
