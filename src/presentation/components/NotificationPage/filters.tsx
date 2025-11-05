import clsx from "clsx";
import React, { FC } from "react";

interface FilterTabProps {
  active: boolean;
  label: React.ReactNode;
  noread: number; // thêm prop noread
}

const FilterTab: FC<FilterTabProps> = ({ active, label, noread = 0 }) => {
  return (
    <div
      className={clsx(
        "relative mt-1 flex h-[33px] items-center justify-center overflow-visible rounded-[8px] border border-gray2 bg-white px-[12px]",
        {
          "!border-green5 !bg-green1": active,
        },
      )}
    >
      {/* Dot đỏ nếu noread > 0 */}
      {noread > 0 && (
        <div className="absolute right-[-5px] top-[-5px] z-10 size-3 rounded-full bg-red5" />
      )}

      <span className="whitespace-nowrap text-sm font-medium text-[#212324]">
        {label}
      </span>
    </div>
  );
};

const notificationFilter = {
  all: {
    label: "Tất cả",
    value: "all",
    noread: 1,
  },
  order: {
    label: "Đơn hàng",
    value: "collected",
    noread: 0,
  },
  redeemPoint: {
    label: "Đổi quà",
    value: "redeemed",
    noread: 0,
  },
  collectPoint: {
    label: "Tích điểm",
    value: "collectPoint",
    noread: 0,
  },
};

export { notificationFilter, FilterTab };
