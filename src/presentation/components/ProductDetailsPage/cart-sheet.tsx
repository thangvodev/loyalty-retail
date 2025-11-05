import { CloseOutlined, StarFilled } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { formatCurrency } from "../../utils/helpers";
import GiftIcon from "../../static/icons/gift-color.png";
import ProductImg from "../../static/images/product.jpg";
import AddCircleFilledIcon from "../icons/AddCircleFilledIcon";
import { Divider } from "antd";
import clsx from "clsx";
import { FormInstance } from "antd/lib";
import { Radio } from "../common/radio";

const CartSheet: FC<Props> = ({ children }) => {
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
              <div className="relative">
                <div
                  className="absolute right-[20px] top-[20px] flex size-[16px] items-center justify-end"
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
          height={"60vh"}
          style={{
            background: "#FFFFFF",
            overflow: "hidden",
            borderRadius: "24px 24px 0 0",
          }}
        >
          <div className="flex flex-1 flex-col gap-[8px] overflow-auto !bg-white font-manrope">
            <ProductCard form={form} />
          </div>
          <div
            className="flex items-center justify-between gap-[12px] px-[16px] pb-[20px] pt-[10px]"
            style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
          >
            <Button
              text={
                <div className="text-base font-normal text-white">
                  Mua ngay • 1.840.000đ
                </div>
              }
              className="h-[44px] rounded-[24px] bg-green6 px-[12px]"
              onClick={form.submit}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const ProductCard: FC<{ form: FormInstance }> = ({ form }) => {
  return (
    <Form
      form={form}
      className="flex flex-col gap-[12px] bg-white px-[16px] pb-[14px] pt-[20px]"
    >
      <div className="flex gap-[12px]">
        <div className="relative size-[90px] overflow-hidden rounded-[6.75px]">
          <img
            src={ProductImg}
            alt=""
            className="size-full object-cover object-top"
          />
          <div className="absolute inset-x-[8.5px] bottom-[6px] flex justify-center gap-[4px]">
            <div
              className="flex h-[11.5px] items-center justify-center whitespace-nowrap rounded-[40px] px-[2px] text-[5.63px] font-normal text-white"
              style={{
                background: "linear-gradient(270deg, #E89543 0%, #FFB76F 100%)",
              }}
            >
              Giảm 50%
            </div>
            <div className="flex h-[11.5px] items-center justify-center whitespace-nowrap rounded-[40px] border border-red5 bg-white px-[2px] text-[5.63px] font-normal text-red6">
              Giá membership
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-sm font-normal">Set công sở BST Thu Đông</div>
          <div className="text-xs font-normal text-gray5">Basic</div>
          <div className="flex items-center gap-[4px]">
            <div className="text-sm font-semibold text-red6">
              {formatCurrency(199000)}
            </div>
            <div className="text-2xs font-normal text-gray7 line-through">
              {formatCurrency(250000)}
            </div>
          </div>
        </div>
      </div>
      <Divider className="m-0" />
      <Form.Item
        name="color"
        label="Màu sắc"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <ColorPicker />
      </Form.Item>
      <Form.Item
        name="size"
        label="Size"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Radio.ButtonGroup
          items={options.size}
          render={(item) => (
            <div className="flex h-[28px] items-center justify-center rounded-[32px] border border-gray1 bg-white px-[8px]">
              <div className="text-xs font-normal text-gray7">
                {item?.label}
              </div>
            </div>
          )}
          activeRender={(item) => (
            <div className="flex h-[28px] items-center justify-center rounded-[32px] border border-transparent bg-gray1 px-[8px]">
              <div className="text-xs font-normal text-black">
                {item?.label}
              </div>
            </div>
          )}
          className="flex flex-wrap gap-[10px]"
          direction="row"
          itemFlex={false}
        />
      </Form.Item>
      <Divider className="m-0" />
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium">Số lượng</div>
        <div className="flex items-center gap-[9px]">
          <div className="flex size-[32px] items-center justify-center rounded-full bg-gray1">
            <div className="w-[8px] border-[1.13px] border-gray5" />
          </div>
          <div className="text-xl font-medium text-gray8">2</div>
          <div className="flex size-[32px] items-center justify-center rounded-full bg-gray1">
            <AddCircleFilledIcon className="size-[16px]" />
          </div>
        </div>
      </div>
    </Form>
  );
};

const ColorPicker: FC<{ value?: string; onChange?: (key) => void }> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex h-[32px] w-[141px] items-center justify-between">
      {Object.entries(options.colors).map((item, index) => {
        const key = item[0];
        const color = item[1].color;

        return (
          <div
            key={index}
            className={clsx(
              "size-[32px] overflow-hidden rounded-full border-[1.45px] border-dashed border-transparent p-[2px]",
              { "!border-[#000000]": value === key },
            )}
            onClick={() => onChange?.(key)}
          >
            <div
              className="size-full rounded-full border-[0.36px] border-[#ABABAB]"
              style={{ background: color }}
            />
          </div>
        );
      })}
    </div>
  );
};

export { CartSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const options = {
  size: [
    { label: "S (40kg - 50kg)", value: "1" },
    { label: "M (50kg - 55kg)", value: "2" },
    { label: "L (55 kg -  70kg)", value: "3" },
    { label: "XL (>70kg)", value: "4" },
  ],
  colors: {
    "1": {
      color: "#000000",
    },
    "2": {
      color: "#B4B3B3",
    },
    "3": {
      color: "#FFFFFF",
    },
    "4": {
      color: "#EB0909",
    },
  },
};
