import React from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

export const SubmitFloat = () => {
  const navigate = useNavigate();

  return (
    <div
      className="sticky inset-x-0 bottom-0 flex items-center gap-[12px] bg-white px-[16px] pb-[20px] pt-[10px]"
      style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
    >
      <Button
        text={
          <div className="text-base font-normal text-white">
            Thanh toán • 1.840.000đ
          </div>
        }
        className="flex h-[39px] flex-1 items-center justify-center rounded-[24px] border border-[#FFFFFFAB] bg-green6"
        onClick={() => navigate("/order-success")}
      />
    </div>
  );
};
