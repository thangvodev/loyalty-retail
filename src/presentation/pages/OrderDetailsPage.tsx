import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import {
  OrderDetailsPageActionDropdown,
  OrderDetailsPageContent,
} from "../components/OrderDetailsPage";

const OrderDetailsPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-80px)] items-center justify-between pr-[12px]">
              <div className="text-base">Đơn hàng #1234</div>
              <OrderDetailsPageActionDropdown />
            </div>
          ) as unknown as string
        }
        className="topbar h-auto flex-none !bg-white"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <ArrowLeftIcon className="size-full object-cover" />
          </div>
        }
        textColor="black"
      />
      <div className="flex flex-1 overflow-auto bg-surface2">
        <OrderDetailsPageContent />
      </div>
    </Page>
  );
};

export default OrderDetailsPage;
