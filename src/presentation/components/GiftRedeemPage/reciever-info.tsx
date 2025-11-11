import React from "react";
import ChevronIcon from "../icons/ChevronIcon";
import PhoneFilledIcon from "../icons/PhoneFilledIcon";
import LocationIcon from "../icons/LocationIcon";
import { RecieverInfoSheet } from "./reciever-info-sheet";

export const RecieverInfo = () => {
  return (
    <RecieverInfoSheet>
      {({ open }) => (
        <div
          className="flex flex-col gap-[4px] rounded-[12px] bg-white p-[12px]"
          style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
          onClick={open}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-normal">Thu Hồng</div>
            <ChevronIcon className="size-[10px]" />
          </div>
          <div className="flex items-center gap-[4px]">
            <PhoneFilledIcon className="text-green5" />
            <div className="text-2xs font-normal text-gray7">0934354656</div>
          </div>
          <div className="flex items-center gap-[4px]">
            <LocationIcon className="size-[16px] text-orange6" />
            <div className="text-2xs font-normal text-gray7">
              124/41/2 Lý Thường Kiệt, quận 10
            </div>
          </div>
        </div>
      )}
    </RecieverInfoSheet>
  );
};
