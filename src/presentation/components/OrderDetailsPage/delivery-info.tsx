import React from "react";
import PhoneFilledIcon from "../icons/PhoneFilledIcon";
import LocationIcon from "../icons/LocationIcon";
import { Divider } from "antd";
import { Steps } from "../common/steps";
import clsx from "clsx";
import CheckMarkIcon from "../icons/CheckMarkIcon";

const DeliveryInfo = () => {
  return (
    <div
      className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="text-sm font-normal">Thông tin vận chuyển</div>
      <div className="w-fit rounded-[4px] bg-gray1 px-[8px] py-[4px] text-2xs font-normal text-gray8">
        Ngày dự kiến nhận hàng: 04/10/2024
      </div>
      <Steps
        items={steps}
        render={({ item, index, itemStatus }) => (
          <div className="flex items-center gap-[8px]">
            {itemStatus == "completed" ? (
              <CheckMarkIcon className="size-[20px] rounded-full bg-green6 text-[#EEFCFC]" />
            ) : (
              <div
                className={clsx(
                  "flex size-[20px] shrink-0 items-center justify-center rounded-full bg-neutral-100 text-2xs font-normal text-[#8E8E8E]",
                  {
                    "!bg-green6 !text-white": itemStatus === "active",
                  },
                )}
              >
                {index + 1}
              </div>
            )}
            <div
              className={clsx(
                "whitespace-nowrap text-xs font-normal text-[#8E8E8E]",
                { "!text-[#4B4B4B]": itemStatus === "active" },
              )}
            >
              {item.title}
            </div>
          </div>
        )}
        divider={<Divider className="m-0 min-w-min max-w-[15px]" />}
      />
      <Divider className="m-0" />
      <RecieverInfo />
    </div>
  );
};

const RecieverInfo = () => {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="text-sm font-normal">Thu Hồng</div>
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
  );
};

export { DeliveryInfo };

const steps = [
  {
    title: "Xác nhận",
    disabled: true,
  },
  {
    title: "Lấy hàng",
    disabled: true,
  },
  {
    title: "Giao hàng",
    disabled: true,
  },
];
