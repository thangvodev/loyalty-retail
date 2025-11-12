import { Dropdown, MenuProps } from "antd";
import React from "react";
import MenuDotIcon from "../icons/MenuDotIcon";
import WalletIcon from "../icons/WalletIcon";
import CloseIcon from "../icons/CloseIcon";
import PhoneCallingIcon from "../icons/PhoneCallingIcon";

const ActionDropdown = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex items-center justify-between">
          <div className="text-sm font-normal text-green6">Thanh toán</div>
          <WalletIcon className="text-gray7" />
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex w-[152px] items-center justify-between">
          <div className="text-sm font-normal">Liên hệ CSKH</div>
          <PhoneCallingIcon className="size-[14px] text-gray7" />
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex items-center justify-between">
          <div className="text-sm font-normal text-red7">Hủy</div>
          <CloseIcon className="size-[14px] text-red6" />
        </div>
      ),
      key: "2",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div
        className="flex size-[20px] items-center justify-center"
        onClick={(e) => e.preventDefault()}
      >
        <MenuDotIcon />
      </div>
    </Dropdown>
  );
};

export default ActionDropdown;
