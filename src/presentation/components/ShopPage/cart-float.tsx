import React from "react";
import { Badge } from "../common/badge";
import { Button } from "../common/button";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import { CartSheet } from "./cart-sheet";

export const CartFloat = () => {
  return (
    <div
      className="sticky inset-x-0 bottom-0 flex items-center gap-[12px] bg-white px-[16px] pb-[20px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
    >
      <CartSheet>
        {({ open }) => (
          <Badge count={2} offset={[-15, "70%"]} size="small">
            <Button.Icon
              icon={<ShoppingBagIcon className="size-[28px] text-green6" />}
              className="bg-green1 px-[12px] py-[10px]"
              onClick={open}
            />
          </Badge>
        )}
      </CartSheet>

      <Button
        text={
          <div className="text-base font-normal text-white">
            Mua ngay • 1.840.000đ
          </div>
        }
        className="flex h-[39px] items-center justify-center rounded-[24px] border border-[#FFFFFFAB] bg-green6"
      />
    </div>
  );
};
