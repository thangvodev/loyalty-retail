import React, { FC } from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { RatingSheet } from "./rating-sheet";

const StatusConfirming = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center gap-[12px] px-[16px] pb-[20px] pt-[10px]">
      <Button
        text={
          <div className="text-base font-normal text-white">Thanh toán</div>
        }
        className="flex h-[39px] flex-1 items-center justify-center rounded-[24px] border border-[#FFFFFFAB] bg-green6"
        onClick={() => navigate("/order-success")}
      />
    </div>
  );
};

const StatusConfirmed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center gap-[12px] px-[16px] pb-[20px] pt-[10px]">
      <Button
        text={
          <div className="text-base font-normal text-green6">Liên hệ CSKH</div>
        }
        className="flex h-[39px] flex-1 items-center justify-center rounded-[24px] border border-green6"
        onClick={() => navigate("/order-success")}
      />
    </div>
  );
};

const StatusDelivered = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col items-center gap-[12px] px-[16px] pb-[20px] pt-[10px]">
      <RatingSheet>
        {({ open }) => (
          <Button
            text={
              <div className="text-base font-normal text-white">
                Đánh giá đơn hàng
              </div>
            }
            className="flex h-[39px] w-full flex-none items-center justify-center rounded-[24px] border border-[#FFFFFFAB] bg-green6"
            onClick={open}
          />
        )}
      </RatingSheet>
      <Button
        text={<div className="text-base font-normal text-green6">Mua lại</div>}
        className="flex h-[39px] w-full flex-none items-center justify-center rounded-[24px] border border-green6"
        onClick={() => navigate("/order-success")}
      />
    </div>
  );
};

const StatusCanceled = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center gap-[12px] px-[16px] pb-[20px] pt-[10px]">
      <Button
        text={<div className="text-base font-normal text-green6">Mua lại</div>}
        className="flex h-[39px] flex-1 items-center justify-center rounded-[24px] border border-green6"
        onClick={() => navigate("/order-success")}
      />
    </div>
  );
};

const SubmitFloat: TFloatRender = ({ status }) => {
  if (status === "confirming") {
    return <StatusConfirming />;
  }
  if (status === "confirmed") {
    return <StatusConfirmed />;
  }
  if (status === "delivering") {
    return <StatusConfirmed />;
  }
  if (status === "delivered") {
    return <StatusDelivered />;
  }
  if (status === "canceled") {
    return <StatusCanceled />;
  }
  return <StatusConfirming />;
};

export { SubmitFloat };

type TFloatRender = FC<{
  status: "confirming" | "confirmed" | "delivering" | "delivered" | "canceled";
}>;
