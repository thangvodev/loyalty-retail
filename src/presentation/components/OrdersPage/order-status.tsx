import React, { FC } from "react";

const StatusConfirming = () => {
  return (
    <div className="flex h-[26px] items-center justify-center rounded-[24px] bg-gray1 px-[4px] text-xs font-medium text-gray6">
      Chờ xác nhận
    </div>
  );
};

const StatusConfirmed = () => {
  return (
    <div className="flex h-[26px] items-center justify-center rounded-[24px] bg-yellow1 px-[4px] text-xs font-medium text-yellow8">
      Chờ lấy hàng
    </div>
  );
};

const StatusDelivering = () => {
  return (
    <div className="flex h-[26px] items-center justify-center rounded-[24px] bg-blue1 px-[4px] text-xs font-medium text-blue6">
      Chờ giao hàng
    </div>
  );
};

const StatusDelivered = () => {
  return (
    <div className="flex h-[26px] items-center justify-center rounded-[24px] bg-green1 px-[4px] text-xs font-medium text-green6">
      Hoàn thành
    </div>
  );
};

const StatusCanceled = () => {
  return (
    <div className="flex h-[26px] items-center justify-center rounded-[24px] bg-red1 px-[4px] text-xs font-medium text-red6">
      Đã huỷ
    </div>
  );
};

const OrderStatusRender: TOrderStatusRender = ({ status }) => {
  if (status === "confirming") {
    return <StatusConfirming />;
  }
  if (status === "confirmed") {
    return <StatusConfirmed />;
  }
  if (status === "delivering") {
    return <StatusDelivering />;
  }
  if (status === "delivered") {
    return <StatusDelivered />;
  }
  if (status === "canceled") {
    return <StatusCanceled />;
  }
  return <StatusConfirming />;
};

export { OrderStatusRender };

type TOrderStatusRender = FC<{
  status: "confirming" | "confirmed" | "delivering" | "delivered" | "canceled";
}>;
