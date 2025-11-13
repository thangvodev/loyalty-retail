import React from "react";
import GiftGiveIcon from "../../static/icons/gift-trade.png";
import TicketYellowIcon from "../../static/icons/ticket-sale-yellow.png";
import ConsoleIcon from "../../static/icons/console.png";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex gap-[20px]">
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
      className="flex flex-1 flex-col items-center gap-[10px]"
      onClick={() => navigate(to)}
    >
      <div
        className="flex w-full items-center justify-center rounded-[12px] bg-[#FAF2EA] py-[8px]"
        style={{ boxShadow: "0px 4px 4px 0px #FFFFFF40 inset" }}
      >
        <img src={icon} alt={label} className="size-[36px] object-contain" />
      </div>
      <span className="text-xs font-medium text-gray8">{label}</span>
    </div>
  );
};

export { Navigation };

const navigationItems = [
  {
    icon: GiftGiveIcon,
    label: "Đổi quà",
    to: "/point-redeem",
  },
  {
    icon: TicketYellowIcon,
    label: "Ví quà",
    to: "/gift-wallet",
  },
  {
    icon: ConsoleIcon,
    label: "Minigame",
    to: "/mini-game",
  },
];
