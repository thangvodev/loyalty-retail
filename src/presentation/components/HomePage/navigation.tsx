import React from "react";
import FlashSaleIcon from "../../static/icons/flash-sale.png";
import GiftIcon from "../../static/icons/gift.png";
import GiftTradeIcon from "../../static/icons/gift-trade.png";
import ShareIcon from "../../static/icons/share.png";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
    <div
      className="flex items-center justify-between rounded-[12px] bg-white px-[20px] py-[10px]"
      style={{ boxShadow: "0px 4px 12px 0px #DAE9EC87" }}
    >
      {navigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          icon={item.icon}
          label={item.label}
          to={item.to}
        />
      ))}
    </div>
  );
};

const NavigationItem = ({
  icon,
  label,
  to,
}: {
  icon: string;
  label: string;
  to: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center gap-[4px]"
      onClick={() => navigate(to)}
    >
      <img src={icon} alt="" className="size-[24px] object-contain" />
      <div className="text-[11px] font-normal text-gray8">{label}</div>
    </div>
  );
};

export { Navigation };

const navigationItems = [
  {
    icon: FlashSaleIcon,
    label: "Flash sale",
    to: "/flash-sale",
  },
  {
    icon: GiftIcon,
    label: "Ví quà",
    to: "/gift-wallet",
  },
  {
    icon: GiftTradeIcon,
    label: "Đổi quà",
    to: "/point-redeem",
  },
  {
    icon: ShareIcon,
    label: "Chia sẻ",
    to: "/",
  },
];
