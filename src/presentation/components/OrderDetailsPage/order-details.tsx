import React from "react";
import ProductImg from "../../static/images/product.jpg";
import { formatCurrency } from "../../utils/helpers";
import { Divider } from "antd";
import TicketSaleIcon from "../../static/icons/ticket-sale.png";
import ChevronIcon from "../icons/ChevronIcon";
import { CodeListSheet } from "./code-list-sheet";

const OrderDetails = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-[12px] bg-white">
      <ProductList />
      <Subtotal />
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[12px] pt-[12px]">
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <React.Fragment key={index}>
            <ProductListItem />
            {index < 2 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const ProductListItem = () => {
  return (
    <div className="flex gap-[12px]">
      <div className="relative size-[56px] overflow-hidden rounded-[6.75px]">
        <img
          src={ProductImg}
          alt=""
          className="size-full object-cover object-top"
        />
        <div className="absolute inset-x-[3.15px] bottom-[3px] flex justify-center gap-[2.8px]">
          <div
            className="flex h-[6.8px] items-center justify-center whitespace-nowrap rounded-[40px] px-[1.4px] text-[3.5px] font-normal text-white"
            style={{
              background: "linear-gradient(270deg, #E89543 0%, #FFB76F 100%)",
            }}
          >
            Giảm 50%
          </div>
          <div className="flex h-[6.8px] items-center justify-center whitespace-nowrap rounded-[40px] border border-red5 bg-white px-[1.4px] text-[3.5px] font-normal text-red6">
            Giá membership
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-normal">Set công sở BST Thu Đông</div>
        <div className="text-xs font-normal text-gray5">Basic</div>
        <div className="flex items-center gap-[4px]">
          <div className="text-sm font-semibold text-red6">
            {formatCurrency(199000)}
          </div>
          <div className="text-2xs font-normal text-gray7 line-through">
            {formatCurrency(250000)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Subtotal = () => {
  return (
    <div className="flex flex-col gap-[8px] bg-white p-[12px]">
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-gray8">Tổng tiền hàng</div>
        <div className="text-sm font-normal">{formatCurrency(184000)}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-gray8">Phí vận chuyển</div>
        <div className="text-sm font-normal">{formatCurrency(25000)}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-gray8">Thuế VAT</div>
        <div className="text-sm font-normal">{formatCurrency(100000)}</div>
      </div>
      {/* Discount */}
      <CodeListSheet>
        {({ open }) => (
          <div className="flex flex-col gap-[12px]" onClick={open}>
            <Divider dashed className="m-0" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <img
                  src={TicketSaleIcon}
                  className="size-[18px] object-contain"
                />
                <div className="text-[15px] font-normal text-gray8">
                  Áp dụng giảm giá
                </div>
              </div>
              <ChevronIcon className="size-[11px] text-gray6" />
            </div>
            <Divider dashed className="m-0" />
          </div>
        )}
      </CodeListSheet>
      <div className="flex items-center justify-between">
        <div className="text-sm font-normal text-red5">Giảm giá</div>
        <div className="text-sm font-normal text-red5">
          {formatCurrency(-50000)}
        </div>
      </div>
      <Divider dashed className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-sm font-normal text-gray8">
          Tổng tiền thanh toán
        </div>
        <div className="text-lg font-semibold text-red5">
          {formatCurrency(1790000)}
        </div>
      </div>
    </div>
  );
};

export { OrderDetails };
