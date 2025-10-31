import React from "react";
import ProductImg from "../../static/images/product-shop.png";
import { formatCurrency } from "../../utils/helpers";
import AddCircleFilledIcon from "../icons/AddCircleFilledIcon";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-[12px] pb-[12px]">
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductListItem key={index} />
      ))}
    </div>
  );
};

const ProductListItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center rounded-[12px] border-2 border-[#FFFFFF] bg-[#FFFFFF]"
      style={{ boxShadow: "0px 4px 12px 0px #DAE9EC87" }}
      onClick={() => navigate("/products/1")}
    >
      <div className="relative size-[135px] overflow-hidden rounded-[12px]">
        <div className="absolute right-[8px] top-[8px]">
          <AddCircleFilledIcon className="size-[28px] rounded-full border border-white bg-green6 text-white" />
        </div>
        <img
          src={ProductImg}
          alt=""
          className="size-full object-cover object-top"
        />
        <div className="absolute inset-x-[8.5px] bottom-[6px] flex justify-center gap-[4px]">
          <div
            className="flex h-[18px] items-center justify-center whitespace-nowrap rounded-[40px] px-[2px] text-[8px] font-normal text-white"
            style={{
              background: "linear-gradient(270deg, #E89543 0%, #FFB76F 100%)",
            }}
          >
            Giảm 50%
          </div>
          <div className="flex h-[18px] items-center justify-center whitespace-nowrap rounded-[40px] border border-red5 bg-white px-[2px] text-[8px] font-normal text-red6">
            Giá membership
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] px-[8px] pb-[12px] pt-[8px]">
        <div className="line-clamp-1 text-sm font-normal">
          Set công sở BST Thu Đông
        </div>
        <div className="text-2xs font-normal text-gray5">ATF1243</div>
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

export { ProductList };
