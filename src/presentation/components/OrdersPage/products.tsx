import React, { useMemo, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import ProductImg from "../../static/images/product.jpg";
import { Divider } from "antd";
import ChevronIcon from "../icons/ChevronIcon";

const data = Array.from({ length: 2 });

const Products = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const renderData = useMemo(
    () => (expanded ? data : data.slice(0, 1)),
    [expanded],
  );

  return (
    <div className="flex flex-col gap-[8px]">
      {renderData.map((_, index) => (
        <React.Fragment key={index}>
          <ProductItem />
          {index !== 1 && <Divider className="my-0" />}
        </React.Fragment>
      ))}
      {!expanded ? (
        <div
          className="flex items-center gap-[4px]"
          onClick={() => setExpanded(true)}
        >
          <div className="text-sm font-normal text-gray6">Xem thêm</div>
          <ChevronIcon className="size-[11px] rotate-90 text-gray6" />
        </div>
      ) : null}
    </div>
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

export { Products };
