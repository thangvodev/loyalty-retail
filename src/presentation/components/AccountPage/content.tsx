import React from "react";
import { Menu } from "./menu";
import { UserProfile } from "./user-profile";
import { Divider } from "antd";

const Content = () => {
  return (
    <div className="flex flex-col">
      <UserProfile />
      <Divider className="m-0 border-[4px] border-[#F9F3F3]" />
      <Menu />
    </div>
  );
};

export default Content;
