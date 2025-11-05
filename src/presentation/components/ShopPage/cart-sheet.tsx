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
              <div className="relative pb-[12px] pt-[16px] font-manrope">
                <div className="text-xl font-medium leading-none">Giỏ hàng</div>
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
            className="flex flex-1 flex-col gap-[8px] overflow-auto bg-surface2 pt-[8px] font-manrope"
            initialValues={initivalValues}
          >
            {Array.from({ length: 10 }).map((_, index) => {
              return <ProductCard key={index} />;
            })}
          </Form>
          <div
            className="flex items-center justify-between gap-[12px] px-[16px] pb-[20px] pt-[10px]"
            style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
          >
            <div className="flex flex-col gap-[8px]">
              <div className="font-normal text-gray6">Tổng tiền</div>
              <div className="text-lg font-semibold text-red6">
                {formatCurrency(1840000)}
              </div>
            </div>
            <Button
              text={
                <div className="text-base font-normal text-white">
                  Tiếp tục mua hàng
                </div>
              }
              className="h-[44px] flex-none rounded-[24px] bg-green6 px-[12px]"
              onClick={form.submit}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const ProductCard = () => {
  return (
    <div
      className="flex flex-col gap-[12px] bg-white px-[16px] py-[14px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
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
        <div className="flex flex-col gap-[8px]">
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
          <div className="flex items-center gap-[8px]">
            <div className="flex size-[28px] items-center justify-center rounded-full bg-gray1">
              <div className="w-[8px] border-[1.13px] border-gray5" />
            </div>
            <div className="text-lg font-medium text-gray8">2</div>
            <div className="flex size-[28px] items-center justify-center rounded-full bg-gray1">
              <AddCircleFilledIcon className="size-[16px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[8px] rounded-[8px] bg-[#FFF8F0] px-[12px] py-[10px]">
        <img src={GiftIcon} alt="" className="size-[16px]" />
        <div className="text-xs font-normal text-red6">
          Tặng voucher 20% khi mua đơn hàng trên 200k
        </div>
      </div>
    </div>
  );
};

export { CartSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
