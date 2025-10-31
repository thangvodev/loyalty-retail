import React from "react";
import { Button } from "../common/button";
import ShareIcon from "../icons/ShareIcon";
import DocumentDownloadIcon from "../icons/DocumentDownloadIcon";

export const Buttons = () => {
  return (
    <div className="flex w-full items-center gap-[12px] px-[24px]">
      <Button
        text={
          <div className="flex items-center gap-[4px]">
            <div className="text-base font-normal text-green6">Share</div>
            <ShareIcon className="size-[18px] text-green6" />
          </div>
        }
        className="flex h-[39px] items-center justify-center rounded-[24px] border border-green6"
      />
      <Button
        text={
          <div className="flex items-center gap-[4px]">
            <div className="text-base font-medium text-white">Download</div>
            <DocumentDownloadIcon className="size-[18px] text-white" />
          </div>
        }
        className="flex h-[39px] items-center justify-center rounded-[24px] border bg-green6"
      />
    </div>
  );
};
