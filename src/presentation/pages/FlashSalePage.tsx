import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import SearchNormalIcon from "../components/icons/SearchNormalIcon";
import { FlashSalePageContent } from "../components/FlashSalePage";

const FlashSalePage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-green6">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-80px)] items-center justify-between pr-[14px]">
              <div className="text-base">Flash sale</div>
              <SearchNormalIcon className="size-[17.14px] text-white" />
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-green6"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <ArrowLeftIcon className="size-full object-cover" />
          </div>
        }
        textColor="white"
      />
      <div className="flex flex-1 overflow-auto bg-surface2 hide-scrollbar">
        <FlashSalePageContent />
      </div>
    </Page>
  );
};

export default FlashSalePage;
