import React, { useState } from "react";
import { Tag } from "../common/tag";
import { Divider } from "antd";
import CustomerImg from "../../static/images/customer.png";
import Rate from "../common/rate";
import { Button } from "../common/button";
import { Select } from "../common/select";
import { StarFilled } from "@ant-design/icons";

const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[12px]">
        <div className="text-base font-medium">Tiêu chí đánh giá</div>
        <Filters />
      </div>
      <div className="flex flex-col gap-[12px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col gap-[8px]">
              {/* Profile */}
              <div className="flex justify-between">
                {/* Name */}
                <div className="flex gap-[12px]">
                  <div className="size-[48px] overflow-hidden rounded-full">
                    <img
                      src={CustomerImg}
                      alt=""
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="text-[15px] font-medium">Emm Yi</div>
                    <Rate className="text-sm" disabled />
                  </div>
                </div>
                {/* Time */}
                <div className="text-xs font-normal text-gray7">
                  19:33, 20/12/2024
                </div>
              </div>
              {/* Feedback */}
              <div className="text-sm font-normal">
                Chất lượng tốt, dịch vụ ổn, nhân viên nhiệt tình.
              </div>
              {/* Tags */}
              <div className="flex h-[22px] gap-[12px]">
                <Tag
                  color="#FFFFFF"
                  className="m-0 flex items-center rounded-[12px] !border-stroke3"
                >
                  <div className="text-gray8">Dịch vụ tốt</div>
                </Tag>
                <Tag
                  color="#FFFFFF"
                  className="m-0 flex items-center rounded-[12px] !border-stroke3"
                >
                  <div className="text-gray8">Nhân viên nhiệt tình</div>
                </Tag>
              </div>
            </div>
            {index < 5 ? <Divider className="m-0" /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="flex gap-[12px]">
      <Select
        defaultValue="5"
        options={ratings}
        colorBorder="transparent"
        className="overflow-hidden rounded-[8px] border border-stroke1"
      />
      <Button
        text={<div className="text-xs font-normal text-gray8">Vải đẹp</div>}
        className="flex h-[32px] flex-none items-center rounded-[8px] border border-stroke1 px-[12px]"
      />
      <Button
        text={
          <div className="text-xs font-normal text-gray8">Kiểu dáng đẹp</div>
        }
        className="flex h-[32px] flex-none items-center rounded-[8px] border border-stroke1 px-[12px]"
      />
    </div>
  );
};

export default Feedbacks;

const ratings = [
  {
    value: "5",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          5 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "4",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          4 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "3",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          3 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "2",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          2 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
  {
    value: "1",
    label: (
      <div className="flex h-[32px] items-center gap-[2px]">
        <div className="text-sm font-normal text-neutral8">
          1 <span className="text-neutral5">(21)</span>
        </div>
        <StarFilled className="text-base text-yellow5" />
      </div>
    ),
  },
];
