import React, { FC } from "react";
import { PointRewardRating } from "./point-reward-rating";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ProductImg from "../../static/images/product.jpg";
import { formatCurrency } from "../../utils/helpers";
import Rate from "../common/rate";
import { RatingSheet } from "./rating-sheet";
import { RatingSheetCompleted } from "./rating-sheet-completed";

const RatingDetails: TRatingDetails = ({ rated }) => {
  return rated ? (
    <div
      className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal">Đánh giá đơn hàng</div>
        <RatingSheetCompleted>
          {({ open }) => (
            <div className="flex items-center gap-[4px]" onClick={open}>
              <div className="text-2xs font-medium leading-none text-gray6">
                Xem chi tiết
              </div>
              <ArrowLeftIcon className="size-[10px] rotate-180 text-gray7" />
            </div>
          )}
        </RatingSheetCompleted>
      </div>
      <div className="flex flex-col gap-[8px]">
        <ProductItem />
        <Rate value={3} size={16} color="#EDF03C" disabled />
        <div className="flex gap-[4px]">
          <div className="flex h-[22px] items-center justify-center rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
            Vải đẹp
          </div>
          <div className="flex h-[22px] items-center justify-center rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
            Kiểu dáng đẹp
          </div>
        </div>
      </div>
    </div>
  ) : (
    <PointRewardRating />
  );
};

const ProductItem = () => {
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

export { RatingDetails };

type TRatingDetails = FC<{ rated: boolean }>;
