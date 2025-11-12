import React from "react";
import { Form } from "../common/form";
import { Radio } from "../common/radio";

export const Filter = () => {
  return (
    <Form>
      <Form.Item name="size" noStyle>
        <Radio.ButtonGroup
          items={options.filters}
          render={(item) => (
            <div className="flex h-[26px] items-center justify-center rounded-[24px] border border-gray1 bg-gray1 px-[8px]">
              <div className="text-xs font-normal text-gray6">
                {item?.label}
              </div>
            </div>
          )}
          activeRender={(item) => (
            <div className="flex h-[26px] items-center justify-center rounded-[24px] border border-green6 bg-green1 px-[8px]">
              <div className="text-xs font-normal text-green6">
                {item?.label}
              </div>
            </div>
          )}
          className="flex flex-wrap gap-[10px]"
          direction="row"
          itemFlex={false}
        />
      </Form.Item>
    </Form>
  );
};

const options = {
  filters: [
    { label: "Chưa dùng ", value: "1" },
    { label: "Hết hạn", value: "2" },
    { label: "Đã dùng", value: "3" },
  ],
};
