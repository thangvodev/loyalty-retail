import React from "react";
import { SearchFilter } from "./search-filter";
import { Categories } from "./categories";
import { SubCategories } from "./sub-categories";
import { ProductList } from "./products";
import { CartFloat } from "./cart-float";

const Content = () => {
  return (
    <div className="flex flex-1 flex-col gap-[12px] pt-[14px]">
      <SearchFilter />
      <Categories />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 gap-[12px]">
          <div className="h-full w-[66px] overflow-auto hide-scrollbar">
            <SubCategories />
          </div>
          <div className="flex-1 overflow-auto">
            <ProductList />
          </div>
        </div>
        <CartFloat />
      </div>
    </div>
  );
};

export default Content;
