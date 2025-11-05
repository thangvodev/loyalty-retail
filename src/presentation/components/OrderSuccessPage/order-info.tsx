import { Divider, Typography } from "antd";
import React from "react";
import CopyIconOutline from "../icons/CopyIconOutline";
import { formatCurrency } from "../../utils/helpers";
import ProductImg from "../../static/images/product.jpg";
import PresentIcon from "../../static/icons/gift-color.png";
import CoinIcon from "../../static/icons/coin-gold.png";

export const OrderInfo = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col items-center gap-[8px]">
        <div className="text-base font-medium">Cảm ơn bạn đã đặt hàng</div>
        <div className="flex items-center justify-center gap-[12px]">
          <div className="text-xs font-normal">Mã đơn hàng</div>
          <Typography.Text
            copyable={{
              icon: [<CopyIconOutline className="text-gray5" />],
            }}
          >
            <span className="text-xs font-normal text-gray7">124AWREFX1</span>
          </Typography.Text>
        </div>
        <div className="text-center text-sm font-normal text-gray7">
          Đơn hàng của bạn sẽ được giao trong vòng 1 - 2 ngày tới.
        </div>
      </div>
      <div className="flex flex-col rounded-[12px] bg-white">
        <ProductList />
        <Subtotal />
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="text-base font-medium text-gray8">
          Bạn nhận được quà tặng
        </div>
        <Rewards />
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[12px] pt-[12px]">
      {Array.from({ length: 2 }).map((_, index) => (
        <React.Fragment key={index}>
          {/* Order */}
          <div className="flex items-center gap-[12px]">
            <div className="relative size-[57px] overflow-hidden rounded-[6.75px]">
              <img
                src={ProductImg}
                alt=""
                className="size-full object-cover object-top"
              />
              <div className="absolute inset-x-[8.5px] bottom-[6px] flex justify-center gap-[4px]">
                <div
                  className="flex h-[11.5px] items-center justify-center whitespace-nowrap rounded-[40px] px-[2px] text-[5.63px] font-normal text-white"
                  style={{
                    background:
                      "linear-gradient(270deg, #E89543 0%, #FFB76F 100%)",
                  }}
                >
                  Giảm 50%
                </div>
                <div className="flex h-[11.5px] items-center justify-center whitespace-nowrap rounded-[40px] border border-red5 bg-white px-[2px] text-[5.63px] font-normal text-red6">
                  Giá membership
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="text-sm font-normal">
                Set công sở BST Thu Đông
              </div>
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
          {index < 10 ? <Divider className="m-0" /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const Subtotal = () => {
  return (
    <div className="flex flex-col gap-[8px] bg-white p-[12px]">
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-gray8">Tổng tiền hàng</div>
        <div className="text-sm font-normal">{formatCurrency(1840000)}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-gray8">Phí vận chuyển</div>
        <div className="text-sm font-normal">{formatCurrency(25000)}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-gray8">Thuế VAT</div>
        <div className="text-sm font-normal">{formatCurrency(100000)}</div>
      </div>
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

const Rewards = () => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] bg-white p-[12px]">
      <div className="flex items-center gap-[4px] rounded-[8px] border border-dashed border-red4 px-[12px] py-[10px]">
        <img src={PresentIcon} className="size-[16px]" />
        <div className="text-xs font-normal text-red6">
          Tặng voucher 20% khi mua đơn hàng trên 200k
        </div>
      </div>
      <div className="flex items-center gap-[4px] rounded-[8px] border border-dashed border-red4 px-[12px] py-[10px]">
        <img src={CoinIcon} className="size-[16px]" />
        <div className="text-xs font-normal text-red6">
          + 200 điểm khi hoàn thành đơn hàng
        </div>
      </div>
    </div>
  );
};
