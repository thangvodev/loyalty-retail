import { Dropdown, MenuProps } from "antd";
import React from "react";
import MenuDotIcon from "../icons/MenuDotIcon";
import { EyeOutlined, WalletOutlined } from "@ant-design/icons";
import WalletIcon from "../icons/WalletIcon";
import CloseIcon from "../icons/CloseIcon";
import PhoneCallingIcon from "../icons/PhoneCallingIcon";
import { useNavigate } from "react-router-dom";

const ActionDropdown = () => {
  const navigate = useNavigate();

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
          <div className="text-sm font-normal">Theo dõi</div>
          <EyeOutlined className="size-[14px] text-gray7" />
        </div>
      ),
      onClick: () => navigate("/orders/1"),
      key: "1",
    },
    {
      label: (
        <div className="flex w-[152px] items-center justify-between">
          <div className="text-sm font-normal">Liên hệ CSKH</div>
          <PhoneCallingIcon className="size-[14px] text-gray7" />
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="flex items-center justify-between">
          <div className="text-sm font-normal text-red7">Hủy</div>
          <CloseIcon className="size-[14px] text-red6" />
        </div>
      ),
      key: "3",
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
