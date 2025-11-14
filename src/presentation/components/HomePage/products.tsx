import React from "react";
import TicketIcon from "../../static/icons/ticket.png";
import CoinIcon from "../../static/icons/coin-gold.png";
import ProductImg from "../../static/images/product.jpg";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";

const Products = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center gap-[4px]">
        <img src={TicketIcon} alt="" className="size-[20px]" />
        <div className="text-lg font-medium">Deal nổi bật</div>
      </div>
      <div className="grid grid-cols-2 gap-[12px]">
        {Array.from({ length: 10 }).map((_, index) => {
          return <ProductItem key={index} />;
        })}
      </div>
    </div>
  );
};

const ProductItem = () => {
  return (
    <div
      className="flex flex-col gap-[4px] rounded-[12px] bg-white p-[8px]"
      style={{
        boxShadow: "0px 2px 4px 0px #0000000A, 0px 1px 1px 0px #00000005",
      }}
    >
      <img
        src={ProductImg}
        alt=""
        className="aspect-square w-full rounded-[8px] object-cover object-top"
      />
      <div className="flex flex-col gap-[4px]">
        <div className="text-[15px] font-normal text-gray8">
          Váy công sở Gumac
        </div>
        <div className="flex items-center gap-[4px]">
          <div className="text-base font-semibold text-green5">
            {formatCurrency(199000)}
          </div>
          <div className="text-[11px] font-normal text-gray7 line-through">
            {formatCurrency(250000)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[4px]">
            <img src={CoinIcon} alt="" className="size-[14px]" />
            <div className="text-2xs font-normal text-gray7">+500 điểm</div>
          </div>
          <Button
            text={<div className="text-2xs font-normal text-white">Mua</div>}
            className="flex w-[48px] flex-none items-center justify-center rounded-[24px] bg-green6 py-[6px]"
          />
        </div>
      </div>
    </div>
  );
};

export { Products };
