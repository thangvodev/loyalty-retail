import { Typography } from "antd";
import React, { FC } from "react";
import CopyIconOutline from "../icons/CopyIconOutline";
import WalletIcon from "../icons/WalletIcon";
import ClockIcon from "../icons/ClockIcon";
import MomoLogo from "../../static/images/momo-logo.png";

const StatusConfirming = () => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="bg-gray1 px-[12px] py-[8px] text-xs font-medium text-gray6">
        Trạng thái: Chờ xác nhận
      </div>
      <div className="flex flex-col gap-[4px] px-[12px] pb-[12px] pt-[8px]">
        <div className="flex items-center justify-between">
          <div className="text-xs font-normal">Mã đơn hàng</div>
          <Typography.Text
            copyable={{
              icon: [<CopyIconOutline className="text-gray5" />],
            }}
          >
            <span className="text-xs font-normal text-gray7">124AWREFX1</span>
          </Typography.Text>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <WalletIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Phương thức thanh toán
            </div>
          </div>
          <div className="text-xs font-normal text-gray7">
            Chưa thanh toán - Tiền mặt
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <ClockIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Thời gian đặt hàng
            </div>
          </div>
          <div className="text-xs font-normal text-gray7">
            12:00:14, 02/10/2025
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusConfirmed = () => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="bg-yellow1 px-[12px] py-[8px] text-xs font-medium text-yellow8">
        Trạng thái: Chờ lấy hàng
      </div>
      <div className="flex flex-col gap-[4px] px-[12px] pb-[12px] pt-[8px]">
        <div className="flex items-center justify-between">
          <div className="text-xs font-normal">Mã đơn hàng</div>
          <Typography.Text
            copyable={{
              icon: [<CopyIconOutline className="text-gray5" />],
            }}
          >
            <span className="text-xs font-normal text-gray7">124AWREFX1</span>
          </Typography.Text>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <WalletIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Phương thức thanh toán
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal text-gray7">
              Đã thanh toán - Momo
            </div>
            <img src={MomoLogo} alt="" className="size-[16px]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <ClockIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Thời gian đặt hàng
            </div>
          </div>
          <div className="text-xs font-normal text-gray7">
            12:00:14, 02/10/2025
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusDelivering = () => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="bg-blue1 px-[12px] py-[8px] text-xs font-medium text-blue6">
        Trạng thái: Chờ giao hàng
      </div>
      <div className="flex flex-col gap-[4px] px-[12px] pb-[12px] pt-[8px]">
        <div className="flex items-center justify-between">
          <div className="text-xs font-normal">Mã đơn hàng</div>
          <Typography.Text
            copyable={{
              icon: [<CopyIconOutline className="text-gray5" />],
            }}
          >
            <span className="text-xs font-normal text-gray7">124AWREFX1</span>
          </Typography.Text>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <WalletIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Phương thức thanh toán
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal text-gray7">
              Đã thanh toán - Momo
            </div>
            <img src={MomoLogo} alt="" className="size-[16px]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <ClockIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Thời gian đặt hàng
            </div>
          </div>
          <div className="text-xs font-normal text-gray7">
            12:00:14, 02/10/2025
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusDelivered = () => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="bg-green1 px-[12px] py-[8px] text-xs font-medium text-green6">
        Trạng thái: Hoàn thành
      </div>
      <div className="flex flex-col gap-[4px] px-[12px] pb-[12px] pt-[8px]">
        <div className="flex items-center justify-between">
          <div className="text-xs font-normal">Mã đơn hàng</div>
          <Typography.Text
            copyable={{
              icon: [<CopyIconOutline className="text-gray5" />],
            }}
          >
            <span className="text-xs font-normal text-gray7">124AWREFX1</span>
          </Typography.Text>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <WalletIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Phương thức thanh toán
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="text-xs font-normal text-gray7">
              Đã thanh toán - Momo
            </div>
            <img src={MomoLogo} alt="" className="size-[16px]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <ClockIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Thời gian đặt hàng
            </div>
          </div>
          <div className="text-xs font-normal text-gray7">
            12:00:14, 02/10/2025
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <ClockIcon className="size-[14px] text-gray5" />
            <div className="text-2xs font-normal text-gray7">
              Thời gian giao hàng
            </div>
          </div>
          <div className="text-xs font-normal text-gray7">
            08:00:14, 04/10/2024
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusCanceled = () => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px] bg-white"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="bg-red1 px-[12px] py-[8px] text-xs font-medium text-red6">
        Trạng thái: Đã huỷ
      </div>
      <div className="flex flex-col gap-[12p] px-[12px] pb-[12px] pt-[8px]">
        {/* Reason */}
        <div className="flex items-center gap-[8px]">
          <div className="text-xs font-normal text-red5">Lí do huỷ:</div>
          <div className="rounded-[12px] border border-stroke3 px-[8px] py-[4px]">
            <div className="text-xs font-normal text-gray8">
              Thay đổi đơn hàng
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col gap-[4px]">
          <div className="flex items-center justify-between">
            <div className="text-xs font-normal">Mã đơn hàng</div>
            <Typography.Text
              copyable={{
                icon: [<CopyIconOutline className="text-gray5" />],
              }}
            >
              <span className="text-xs font-normal text-gray7">124AWREFX1</span>
            </Typography.Text>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <WalletIcon className="size-[14px] text-gray5" />
              <div className="text-2xs font-normal text-gray7">
                Phương thức thanh toán
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="text-xs font-normal text-gray7">
                Đã thanh toán - Momo
              </div>
              <img src={MomoLogo} alt="" className="size-[16px]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <ClockIcon className="size-[14px] text-gray5" />
              <div className="text-2xs font-normal text-gray7">
                Thời gian đặt hàng
              </div>
            </div>
            <div className="text-xs font-normal text-gray7">
              12:00:14, 02/10/2025
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <ClockIcon className="size-[14px] text-gray5" />
              <div className="text-2xs font-normal text-gray7">
                Thời gian giao hàng
              </div>
            </div>
            <div className="text-xs font-normal text-gray7">
              08:00:14, 04/10/2024
            </div>
          </div>
        </div>
      </div>
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
