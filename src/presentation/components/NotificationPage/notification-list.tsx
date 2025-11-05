import React, { FC } from "react";
import BoxIcon from "../../static/icons/box.png";
import CoinNotiIcon from "../../static/icons/coin.png";
import ProIcon from "../../static/icons/pro.png";
import Ticket from "../../static/icons/ticket-discount.png";
import NvIcon from "../../static/icons/nv.png";
import { Badge } from "antd";

const notifications = [
  {
    icon: (
      <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-orange5">
        <img src={CoinNotiIcon} className="size-[15px]" />
      </div>
    ),
    label: "Bạn vừa nhận được điểm thưởng",
    description: "Chúc mừng! Bạn nhận được điểm thưởng từ đơn hàng #DH101",
    time: "2 phút trước",
    status: "+150 điểm",
    statusColor: "bg-orange1 text-orange6",
    read: false,
  },
  {
    icon: (
      <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-green6">
        <img src={BoxIcon} className="size-[15px]" />
      </div>
    ),
    label: "Đơn hàng #DH002 đang được vận chuyển",
    description: "Đơn hàng của bạn đã được giao cho đơn vị vận chuyển.",
    time: "2 phút trước",
    status: "Đang lấy hàng",
    statusColor: "bg-orange1 text-orange6",
    read: false,
  },
  {
    icon: (
      <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-green6">
        <img src={BoxIcon} className="size-[15px]" />
      </div>
    ),
    label: "Đơn hàng #12435 đã được xác nhận",
    description:
      "Đơn hàng của bạn đã được xác nhận và đang được chuẩn bị. Dự kiến giao trong 2 - 3 ngày tới.",
    time: "2 phút trước",
    status: "Đã xác nhận",
    statusColor: "bg-green1 text-green7",
    read: true,
  },
  {
    icon: (
      <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-purple6">
        <img src={ProIcon} className="size-[15px]" />
      </div>
    ),
    label: "Chúc mừng! Bạn đã lên hạng mới",
    description:
      "Bạn đã chính thức trở thành thành viên Gold với nhiều ưu đãi hấp dẫn.",
    time: "2 phút trước",
    read: true,
  },
  {
    icon: (
      <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-red5">
        <img src={Ticket} className="size-[15px]" />
      </div>
    ),
    label: "Ưu đãi dành riêng cho bạn",
    description:
      "Bạn đã chính thức trở thành thành viên Gold với nhiều ưu đãi hấp dẫn.",
    time: "2 phút trước",
    read: true,
  },
  {
    icon: (
      <div className="bg-blue7 flex size-7 min-w-7 items-center justify-center rounded-full">
        <img src={NvIcon} className="size-[15px]" />
      </div>
    ),
    label: "Nhiệm vụ mới: Mua sắm cuối tuần",
    description:
      "Hoàn thành 3 đơn hàng trong tuần này để nhận thêm 500 điểm thưởng.",
    time: "2 phút trước",
    badge: "+500 điểm",
    badgeColor: "bg-orange5 text-white",
    read: true,
  },
];

const NotificationList = () => {
  return (
    <div className="flex flex-col gap-[20px] overflow-visible pb-[16px]">
      {notifications.map((item, index) => (
        <NotificationItem key={index} {...item} />
      ))}
    </div>
  );
};

const NotificationItem: FC<TNotificationItem> = ({
  icon,
  label,
  badge,
  badgeColor,
  description,
  time,
  status,
  statusColor,
  read,
}) => {
  return (
    <div
      className="flex items-start justify-between rounded-[12px] bg-white p-3"
      style={{
        boxShadow: "0px 4px 12px 0px #DAE9EC87",
      }}
    >
      <div className="flex w-full items-start gap-[12px]">
        {icon && <div className="pt-1">{icon}</div>}

        <div className="flex w-full flex-col gap-[8px]">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <div className="text-sm font-medium text-[#212324]">{label}</div>
              {status && (
                <div
                  className={`size-fit min-w-[65px] whitespace-nowrap rounded-[12px] px-2 py-[2px] text-[10px] font-medium leading-[120%] ${statusColor}`}
                >
                  {status}
                </div>
              )}
            </div>
          </div>

          <div className="text-sm text-gray8">{description}</div>

          {badge && (
            <div
              className={`size-fit min-w-[65px] whitespace-nowrap rounded-[12px] p-[6px] text-[10px] font-medium leading-[120%] ${badgeColor}`}
            >
              {badge}
            </div>
          )}

          {!read && (
            <div className="flex items-center justify-between">
              <div className="text-[10px] text-gray5">{time}</div>
              <div className="size-2 rounded-full bg-blue6" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type TNotificationItem = {
  icon?: React.ReactNode;
  label?: string;
  badge?: string;
  badgeColor?: string;
  description?: string;
  time?: string;
  status?: string;
  statusColor?: string;
  read?: boolean;
};

export { NotificationList };
