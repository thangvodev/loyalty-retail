import clsx from "clsx";
import React, { FC } from "react";
import CloseIcon from "../components/icons/CloseIcon";
import DeliveryIcon from "../components/icons/DeliveryIcon";
import CheckMarkOutline from "../components/icons/CheckMarkOutline";
import ClockFastIcon from "../components/icons/ClockFastIcon";

const StatusConfirming: FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      className={clsx(
        "flex h-[26px] items-center justify-center rounded-[40px] bg-gray2 px-[12px]",
        {
          "!bg-yellow1": active,
        },
      )}
    >
      <span
        className={clsx("whitespace-nowrap text-xs font-medium text-gray8", {
          "!text-yellow8": active,
        })}
      >
        Chờ xác nhận
      </span>
    </div>
  );
};

const StatusCompleted: FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      className={clsx(
        "flex h-[26px] items-center justify-center rounded-[40px] bg-gray2 px-[12px]",
        {
          "!bg-green1": active,
        },
      )}
    >
      <span
        className={clsx("whitespace-nowrap text-xs font-medium text-gray8", {
          "!text-green6": active,
        })}
      >
        Đã hoàn thành
      </span>
    </div>
  );
};

const StatusPendingDelivery: FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      className={clsx(
        "flex h-[26px] items-center justify-center rounded-[40px] bg-gray2 px-[12px]",
        {
          "!bg-blue1": active,
        },
      )}
    >
      <span
        className={clsx("whitespace-nowrap text-xs font-medium text-gray8", {
          "!text-blue6": active,
        })}
      >
        Chờ giao hàng
      </span>
    </div>
  );
};

const StatusCanceled: FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      className={clsx(
        "flex h-[26px] items-center justify-center rounded-[40px] bg-gray2 px-[12px]",
        {
          "!bg-red1": active,
        },
      )}
    >
      <span
        className={clsx("whitespace-nowrap text-xs font-medium text-gray8", {
          "!text-red6": active,
        })}
      >
        Đã huỷ
      </span>
    </div>
  );
};

const StatusNotArrived: FC<{ active: boolean }> = ({ active }) => {
  return (
    <div
      className={clsx("h-[26px] rounded-[40px] bg-gray2 px-[12px]", {
        "!bg-orange1": active,
      })}
    >
      <span
        className={clsx("whitespace-nowrap text-xs font-medium text-gray8", {
          "!text-orange6": active,
        })}
      >
        Chưa tới
      </span>
    </div>
  );
};

const orderStatus = {
  confirming: {
    render: ({ active }) => <StatusConfirming active={active} />,
    value: "confirming",
    label: "Chờ xác nhận",
    icon: (
      <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-yellow1">
        <ClockFastIcon className="size-[28px] text-yellow8" />
      </div>
    ),
  },
  completed: {
    render: ({ active }) => <StatusCompleted active={active} />,
    value: "completed",
    label: "Đã hoàn thành",
    icon: (
      <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-green1">
        <CheckMarkOutline className="size-[28px] text-green5" />
      </div>
    ),
  },
  pendingDelivery: {
    render: ({ active }) => <StatusPendingDelivery active={active} />,
    value: "pendingDelivery",
    label: "Chờ giao hàng",
    icon: (
      <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-blue1">
        <DeliveryIcon className="size-[28px] text-blue6" />
      </div>
    ),
  },
  canceled: {
    render: ({ active }) => <StatusCanceled active={active} />,
    value: "canceled",
    label: "Đã huỷ",
    icon: (
      <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-red1">
        <CloseIcon className="size-[28px] text-red6" />
      </div>
    ),
  },
  notArrived: {
    render: ({ active }) => <StatusNotArrived active={active} />,
    value: "notArrived",
    label: "Chưa tới",
    icon: null,
  },
} as const;

export { orderStatus };

export type TOrderStatus = keyof typeof orderStatus;
