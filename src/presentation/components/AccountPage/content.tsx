import React from "react";
import { Menu } from "./menu";
import { UserProfile } from "./user-profile";
import { Divider } from "antd";

const Content = () => {
  return (
    <div className="flex flex-col pt-[16px]">
      <UserProfile />
      <Menu />
    </div>
  );
};

export default Content;
