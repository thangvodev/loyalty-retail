import React, { FC } from "react";
import { Products } from "./products";
import ZaloPay from "../../static/images/zalo-pay-logo.png";
import { Divider } from "antd";
import { OrderStatusRender } from "./order-status";
import ActionDropdown from "./action-dropdown";
import { Button } from "../common/button";
import FilterIcon from "../icons/FilterIcon";
import { useNavigate } from "react-router-dom";

const Orders: TOrders = ({ status, setCurrentTabType }) => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px]">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">Danh sách đơn hàng</div>
        <div className="flex items-center gap-[12px]">
          <Button
            text={
              <div className="text-xs font-medium text-green6">Lịch sử</div>
            }
            className="flex h-[24px] items-center justify-center rounded-[24px] border border-green6 bg-green1 px-[12px]"
            onClick={setCurrentTabType}
          />
          <Button.Icon icon={<FilterIcon className="text-green6" />} />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        {data.map((_, index) => (
          <OrderItem key={index} status={status} />
        ))}
      </div>
    </div>
  );
};

const OrderItem: TOrderItem = ({ status }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col rounded-[12px] border border-gray1 bg-white"
      onClick={() => navigate("/orders/1")}
    >
      <div className="flex items-center justify-between px-[12px] py-[8px]">
        <div className="text-sm font-normal text-gray7">Mã đơn: #12434</div>
        <div className="flex items-center gap-[12px]">
          <OrderStatusRender status={status} />
          <ActionDropdown />
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex flex-col gap-[8px] px-[12px] pb-[10px] pt-[8px]">
        <Products />
        <div className="flex items-end justify-between">
          <div className="text-2xs font-normal text-gray6">
            Đặt lúc 12:00, 05/07/2024
          </div>
          <div className="flex flex-col justify-end gap-[4px]">
            <div className="text-xs font-medium text-gray7">
              Tổng: <span className="text-black">20.000.000đ</span>
            </div>
            <div className="flex items-center justify-end gap-[4px]">
              <img
                src={ZaloPay}
                alt=""
                className="size-[14px] rounded-[2.8px] border-[0.5px] border-gray1"
              />
              <div className="text-2xs font-normal text-gray7">
                Đã thanh toán
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Orders };

const data = Array.from({ length: 2 });

type TOrders = FC<{
  status: "confirming" | "confirmed" | "delivering" | "delivered" | "canceled";
  setCurrentTabType?: () => void;
}>;

type TOrderItem = FC<{
  status: "confirming" | "confirmed" | "delivering" | "delivered" | "canceled";
}>;
