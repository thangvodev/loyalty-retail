import { CloseOutlined, StarFilled } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Radio } from "../common/radio";
import { InputNumber } from "../common/input-number";
import { Button } from "../common/button";

const FilterSheet: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  const initivalValues = {
    sortBy: "",
    rating: 0,
    priceRange: {},
  };

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative pt-[16px] font-manrope">
                <div className="text-xl font-medium leading-none">Bộ lọc</div>
                <div
                  className="absolute right-[16px] top-[16px] flex size-[16px] items-center justify-end"
                  onClick={() => setVisible(false)}
                >
                  <CloseOutlined className="size-[20px] text-gray7" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"85vh"}
          style={{
            background: "#FFFFFF",
            overflow: "visible",
          }}
        >
          <Form
            form={form}
            className="flex flex-1 flex-col gap-[20px] overflow-auto pt-[8px] font-manrope"
            initialValues={initivalValues}
          >
            <Form.Item
              name="sortedBy"
              label="Sắp xếp theo"
              labelCol={{ className: "!p-0" }}
              className="m-0 px-[16px]"
            >
              <Radio.ButtonGroup
                items={options.sortBy}
                render={(item) => (
                  <div className="flex h-[28px] items-center justify-center rounded-[32px] border border-transparent bg-gray1 px-[12px]">
                    <div className="text-sm font-normal text-[#4B4B4B]">
                      {item?.label}
                    </div>
                  </div>
                )}
                activeRender={(item) => (
                  <div className="flex h-[28px] items-center justify-center rounded-[32px] border border-green5 bg-white px-[12px]">
                    <div className="text-sm font-normal text-[#4B4B4B]">
                      {item?.label}
                    </div>
                  </div>
                )}
                className="flex gap-[10px]"
                direction="row"
                itemFlex={false}
              />
            </Form.Item>
            <Form.Item
              name="rating"
              label="Đánh giá"
              labelCol={{ className: "!p-0" }}
              className="m-0 px-[16px]"
            >
              <Radio.ButtonGroup
                multiple
                items={options.rating}
                render={(item) => (
                  <div className="flex h-[28px] items-center justify-center gap-[4px] rounded-[32px] border border-transparent bg-gray1 px-[12px]">
                    <div className="text-sm font-normal text-[#4B4B4B]">
                      {item?.label}
                    </div>
                    <StarFilled className="text-[#FFC107]" />
                  </div>
                )}
                activeRender={(item) => (
                  <div className="flex h-[28px] items-center justify-center gap-[4px] rounded-[32px] border border-green5 bg-white px-[12px]">
                    <div className="text-sm font-normal text-[#4B4B4B]">
                      {item?.label}
                    </div>
                    <StarFilled className="text-[#FFC107]" />
                  </div>
                )}
                className="flex gap-[10px]"
                direction="row"
                itemFlex={false}
              />
            </Form.Item>
            <div className="flex flex-col gap-[8px]">
              <Form.Item
                label="Mức giá"
                labelCol={{ className: "!p-0" }}
                className="m-0 px-[16px]"
                shouldUpdate={(prev, cur) => prev.priceRange != cur.priceRange}
              >
                {({ getFieldValue, setFieldValue }) => {
                  const range = getFieldValue("priceRange") ?? {};
                  return (
                    <div className="flex items-center gap-[8px]">
                      <InputNumber.Separate
                        value={range.min}
                        onChange={(value) =>
                          setFieldValue("priceRange", { ...range, min: value })
                        }
                        placeholder="Tối thiểu"
                        separator="."
                        digitsPerGroup={3}
                        className="h-[47px] flex-1 rounded-[8px]"
                        min={0}
                      />
                      <div className="m-0 !w-[12px] border" />
                      <InputNumber.Separate
                        value={range.max}
                        onChange={(value) =>
                          setFieldValue("priceRange", { ...range, max: value })
                        }
                        placeholder="Tối đa"
                        separator="."
                        digitsPerGroup={3}
                        className="h-[47px] flex-1 rounded-[8px]"
                        min={0}
                      />
                    </div>
                  );
                }}
              </Form.Item>
              <Form.Item name="priceRange" noStyle>
                <Radio.ButtonGroup
                  items={options.priceRange}
                  render={(item) => (
                    <div className="flex h-[28px] items-center justify-center gap-[4px] rounded-[32px] border border-transparent bg-gray1 px-[12px]">
                      <div className="whitespace-nowrap text-sm font-normal text-[#4B4B4B]">
                        {item?.label}
                      </div>
                    </div>
                  )}
                  activeRender={(item) => (
                    <div className="flex h-[28px] items-center justify-center gap-[4px] rounded-[32px] border border-green5 bg-white px-[12px]">
                      <div className="whitespace-nowrap text-sm font-normal text-[#4B4B4B]">
                        {item?.label}
                      </div>
                    </div>
                  )}
                  className="flex gap-[10px] overflow-auto px-[16px] hide-scrollbar"
                  direction="row"
                  itemFlex={false}
                />
              </Form.Item>
            </div>
          </Form>
          <div
            className="flex gap-[12px] px-[16px] pb-[20px] pt-[10px]"
            style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
          >
            <Button
              text={<div className="text-base font-normal">Khôi phục</div>}
              className="h-[39px] flex-none rounded-[24px] bg-gray1 px-[12px]"
              onClick={() => form.resetFields()}
            />
            <Button
              text={
                <div className="text-base font-normal text-white">
                  Áp dụng bộ lọc
                </div>
              }
              className="h-[39px] rounded-[24px] bg-green6 px-[12px]"
              onClick={form.submit}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { FilterSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const options = {
  sortBy: [
    { label: "Giá (Thấp đến cao)", value: "1" },
    { label: "Giá (Cao đến thấp)", value: "2" },
  ],
  rating: [
    { label: "5", value: 5 },
    { label: "4", value: 4 },
    { label: "3", value: 3 },
    { label: "2", value: 2 },
    { label: "1", value: 1 },
  ],
  priceRange: [
    { label: "0 - 100k", value: { min: 0, max: 100000 } },
    { label: "100 - 200k", value: { min: 100000, max: 200000 } },
    { label: "200 - 500k", value: { min: 200000, max: 500000 } },
    { label: "500 - 1000k", value: { min: 500000, max: 1000000 } },
  ],
};
