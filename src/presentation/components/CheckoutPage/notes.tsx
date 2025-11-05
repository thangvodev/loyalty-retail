import React from "react";
import { Collapse } from "../common/collapse";
import { CollapseProps, Divider, Input } from "antd";

export const Notes = () => {
  return <Collapse items={items} bordered={false} expandIconPosition="end" />;
};

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex items-center gap-[4px]">
        <div className="text-[15px] font-normal text-gray8">Thêm ghi chú</div>
      </div>
    ),
    children: (
      <Input.TextArea
        placeholder="Nhập ghi chú"
        autoSize={{ minRows: 3, maxRows: 5 }}
        className="rounded-[8px]"
      />
    ),
    styles: {
      header: {
        alignItems: "center",
        padding: "12px",
      },
      body: {
        padding: "0 12px 12px",
      },
    },
    className: "bg-white !rounded-[12px] flex flex-col",
  },
];
