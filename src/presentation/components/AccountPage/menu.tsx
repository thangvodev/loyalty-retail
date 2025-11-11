import React from "react";
import { useNavigate } from "react-router-dom";
import ChevronIcon from "../icons/ChevronIcon";
import OrderMenuFilledIcon from "../icons/OrderMenuFilledIcon";
import ProfileFilledIcon from "../icons/ProfileFilledIcon";
import LocationIcon from "../icons/LocationIcon";
import NotificationBingIcon from "../icons/NotificationBingIcon";
import NotificationBingFilledIcon from "../icons/NotificationBingFilledIcon";
import SupportIcon from "../icons/SupportIcon";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[10px] p-[16px]">
      <div
        className="flex items-center justify-between py-[12px]"
        onClick={() => navigate("/profile")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[24px] items-center justify-center">
            <ProfileFilledIcon className="size-full text-green6" />
          </div>
          <div className="text-sm font-semibold">Thông tin cá nhân</div>
        </div>
        <ChevronIcon className="size-[16px] text-gray4" />
      </div>
      <div
        className="flex items-center justify-between py-[12px]"
        onClick={() => navigate("/address")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[24px] items-center justify-center">
            <LocationIcon className="size-full text-green6" />
          </div>
          <div className="text-sm font-semibold">Địa chỉ giao hàng</div>
        </div>
        <ChevronIcon className="size-[16px] text-gray4" />
      </div>
      <div
        className="flex items-center justify-between py-[12px]"
        onClick={() => navigate("/notify-setting")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[24px] items-center justify-center">
            <NotificationBingFilledIcon className="size-full text-green6" />
          </div>
          <div className="text-sm font-semibold">Cài đặt thông báo</div>
        </div>
        <ChevronIcon className="size-[16px] text-gray4" />
      </div>
      <div className="flex items-center justify-between py-[12px]">
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[24px] items-center justify-center">
            <SupportIcon className="size-full text-green6" />
          </div>
          <div className="text-sm font-semibold">Hỗ trợ CSKH</div>
        </div>
        <ChevronIcon className="size-[16px] text-gray4" />
      </div>
      <div
        className="flex items-center justify-between py-[12px]"
        onClick={() => navigate("/mini-game")}
      >
        <div className="flex items-center gap-[12px]">
          <div className="flex size-[24px] items-center justify-center">
            <SupportIcon className="size-full text-green6" />
          </div>
          <div className="text-sm font-semibold">Minigame</div>
        </div>
        <ChevronIcon className="size-[16px] text-gray4" />
      </div>
    </div>
  );
};

export { Menu };
