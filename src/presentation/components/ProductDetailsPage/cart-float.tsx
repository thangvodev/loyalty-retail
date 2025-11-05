import React from "react";
import { Button } from "../common/button";
import { CartSheet } from "./cart-sheet";
import { useNavigate } from "react-router-dom";

export const CartFloat = () => {
  const navigate = useNavigate();

  return (
    <div
      className="sticky inset-x-0 bottom-0 flex items-center gap-[12px] bg-white px-[16px] pb-[20px] pt-[10px]"
      style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
    >
      <CartSheet>
        {({ open }) => (
          <Button
            text={
              <div className="text-base font-normal text-black">
                Thêm vào giỏ
              </div>
            }
            className="flex h-[39px] w-fit flex-none items-center justify-center rounded-[24px] border border-gray2 bg-white px-[12px]"
            onClick={open}
          />
        )}
      </CartSheet>
      <Button
        text={<div className="text-base font-normal text-white">Mua ngay</div>}
        className="flex h-[39px] flex-1 items-center justify-center rounded-[24px] border border-[#FFFFFFAB] bg-green6"
        onClick={() => navigate("/checkout")}
      />
    </div>
  );
};
