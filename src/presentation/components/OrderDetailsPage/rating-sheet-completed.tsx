import { CloseOutlined, StarOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Divider, Input } from "antd";
import Rate from "../common/rate";
import ProductImg from "../../static/images/product.jpg";
import { formatCurrency } from "../../utils/helpers";
import { ImageUpload } from "../common/image-upload";
import AddImgIcon from "../../static/icons/gallery-add.png";

const RatingSheetCompleted: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="relative pb-[12px] pt-[16px] font-manrope">
                <div className="flex flex-col gap-[8px]">
                  <div className="text-xl font-medium leading-none">
                    Đánh giá đơn hàng
                  </div>
                  <div className="text-xs font-normal leading-none text-gray7">
                    Đơn hàng: 124AWREFX1
                  </div>
                </div>
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
            background: "#F5F9FB",
            overflow: "visible",
          }}
        >
          <div className="flex-1 overflow-auto px-[16px] pb-[16px] font-manrope">
            <div className="flex flex-col gap-[12px]">
              {ratings.map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-[14px] rounded-[12px] bg-white p-[12px]"
                  style={{ boxShadow: "0px 4px 12px 0px #DAE9EC87" }}
                >
                  <ProductItem />
                  <Divider className="m-0" />
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-xs font-normal">Đánh giá đơn hàng</div>
                    <div className="flex flex-col gap-[8px]">
                      <Rate value={3} size={16} color="#EDF03C" disabled />
                      {/* Tags */}
                      <div className="flex gap-[4px]">
                        <div className="flex h-[22px] items-center justify-center rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
                          Vải đẹp
                        </div>
                        <div className="flex h-[22px] items-center justify-center rounded-[12px] border border-stroke3 px-[8px] text-xs font-normal text-gray8">
                          Kiểu dáng đẹp
                        </div>
                      </div>
                      {/* Feedback */}
                      <div className="text-xs font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </div>
                      <div className="flex gap-[8px]">
                        <img
                          src={ProductImg}
                          alt=""
                          className="size-[40px] rounded-[5px]"
                        />
                        <img
                          src={ProductImg}
                          alt=""
                          className="size-[40px] rounded-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

const ProductItem = () => {
  return (
    <div className="flex gap-[12px]">
      <div className="relative size-[56px] overflow-hidden rounded-[6.75px]">
        <img
          src={ProductImg}
          alt=""
          className="size-full object-cover object-top"
        />
        <div className="absolute inset-x-[3.15px] bottom-[3px] flex justify-center gap-[2.8px]">
          <div
            className="flex h-[6.8px] items-center justify-center whitespace-nowrap rounded-[40px] px-[1.4px] text-[3.5px] font-normal text-white"
            style={{
              background: "linear-gradient(270deg, #E89543 0%, #FFB76F 100%)",
            }}
          >
            Giảm 50%
          </div>
          <div className="flex h-[6.8px] items-center justify-center whitespace-nowrap rounded-[40px] border border-red5 bg-white px-[1.4px] text-[3.5px] font-normal text-red6">
            Giá membership
          </div>
        </div>
      </div>
      <div className="flex flex-col">
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
  );
};

export { RatingSheetCompleted };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const ratings = Array(2).fill({});
