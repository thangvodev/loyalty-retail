import React from "react";
import { Title } from "./title";
import { SaleList } from "./sale-list";

const Content = () => {
  return (
    <div className="flex w-full flex-col gap-[12px] overflow-auto p-[16px]">
      <Title />
      <SaleList />
    </div>
  );
};

export default Content;
