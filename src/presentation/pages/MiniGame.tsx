import React from "react";
import { Header, Page } from "zmp-ui";
import { Footer } from "../components/common/footer";
import { MiniGameContent } from "../components/MiniGame";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";

const MiniGame = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-green5">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-80px)] items-center justify-between pr-[14px]">
              <div>Minigame</div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none !bg-green5"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <ArrowLeftIcon className="size-full object-cover" />
          </div>
        }
        textColor="white"
      />
      <div className="flex-1 overflow-auto bg-surface2">
        <MiniGameContent />
      </div>
      <Footer />
    </Page>
  );
};

export default MiniGame;
