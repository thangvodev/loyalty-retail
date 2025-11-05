import { Divider } from "antd";
import React, { FC } from "react";
import CoinIcon from "../../static/icons/coin-gold.png";
import { Badge } from "../common/badge";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import BoxIcon from "../../static/icons/box.png";

const NotificationList = () => {
  return (
    <div className="flex flex-col gap-[20px] overflow-visible pb-[16px]">
      {Array.from({ length: 20 }).map((_, index) => (
        <React.Fragment key={index}>
          <NotificationItem
            icon={
              <div className="flex size-7 min-w-7 items-center justify-center rounded-full bg-green6">
                <img src={BoxIcon} className="size-[15.56px]" />
              </div>
            }
            label="Đơn hàng #DH002 đang được vận chuyển"
            description={`Đơn hàng của bạn đã được giao cho đơn vị vận chuyển.`}
            read={false}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

const NotificationItem: FC<TNotificationItem> = ({
  icon,
  label,
  description,
  read,
}) => {
  return (
    <div
      className="flex items-center justify-between bg-white p-3"
      style={{
        boxShadow: "0px 4px 12px 0px #DAE9EC87",
      }}
    >
      <div className="flex items-start gap-[12px]">
        {icon && <div className="pt-1">{icon}</div>}

        <div className="flex flex-col gap-[8px]">
          <div className="flex gap-2">
            <div className="text-sm font-medium text-[#212324]">{label}</div>
            <div className="size-fit whitespace-nowrap rounded-[12px] bg-orange1 p-1 text-[10px] text-sm font-normal leading-[120%] text-orange6">
              Đang lấy hàng
            </div>
          </div>

          <div className="text-sm text-gray8">{description}</div>

          <div className="flex items-end justify-between">
            <div className="ledaing-[10px] text-[10px] text-gray5">
              2 phút trước
            </div>
            <div className="size-2 rounded-full bg-blue6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NotificationList };

type TNotificationItem = {
  icon?: React.ReactNode;

  label?: string;
  description?: string;
  read?: boolean;
};
