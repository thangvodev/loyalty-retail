import { CloseOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Form } from "../common/form";
import { Button } from "../common/button";
import { Divider, Input } from "antd";
import Rate from "../common/rate";
import ProductImg from "../../static/images/product.jpg";
import { formatCurrency } from "../../utils/helpers";
import { ImageUpload, UploadImage } from "../common/image-upload";
import AddImgIcon from "../../static/icons/gallery-add.png";

const RatingSheet: FC<Props> = ({ children }) => {
  const [ratingform] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [ratingImages, setRatingImages] = useState<{
    [key: number]: { images: UploadImage[] };
  }>({});

  const initivalValues = {
    ratings: ratings,
  };

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
          <Form
            name="ratingform"
            form={ratingform}
            className="flex-1 overflow-auto px-[16px] pb-[16px] font-manrope"
            initialValues={initivalValues}
          >
            <Form.List name="ratings">
              {(fields) => (
                <div className="flex flex-col gap-[12px]">
                  {fields.map((field) => (
                    <div
                      key={field.key}
                      className="flex flex-col gap-[14px] rounded-[12px] bg-white p-[12px]"
                      style={{ boxShadow: "0px 4px 12px 0px #DAE9EC87" }}
                    >
                      <ProductItem />
                      <Divider className="m-0" />
                      <Form.Item
                        label={
                          <div className="text-[15px]">Đánh giá đơn hàng</div>
                        }
                        layout="vertical"
                        labelCol={{ className: "!p-0 !pb-[12px]" }}
                        name={[field.name, "rating"]}
                        style={{ margin: 0 }}
                      >
                        <Rate
                          size={24}
                          color="#EDF03C"
                          character={({ value = 0, index = 0 }) =>
                            index < value ? <StarFilled /> : <StarOutlined />
                          }
                        />
                      </Form.Item>
                      <Form.Item
                        label={<div className="text-xs">Nhận xét của bạn</div>}
                        layout="vertical"
                        name={[field.name, "feedback"]}
                        style={{ margin: 0 }}
                      >
                        <Input.TextArea
                          className="border-gray2 text-xs"
                          autoSize={{ minRows: 3, maxRows: 6 }}
                          placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này"
                        />
                      </Form.Item>
                      <Form.Item
                        label={<div className="text-xs">Thêm hình ảnh</div>}
                        layout="vertical"
                        style={{ margin: 0 }}
                      >
                        <ImageUpload
                          images={ratingImages[field.name]?.images}
                          setImages={(images) =>
                            setRatingImages((prev) => ({
                              ...prev,
                              [field.name]: { images },
                            }))
                          }
                          maxCount={5}
                          uploadButton={
                            <div className="flex size-[64px] flex-col items-center justify-center gap-[3.2px] rounded-[9.6px] border border-dashed border-[#E1E1E1] px-[12px]">
                              <img
                                src={AddImgIcon}
                                alt=""
                                className="size-[19px]a"
                              />
                              <div className="text-center text-xs font-normal text-[#8E8E8E]">
                                Upload
                              </div>
                            </div>
                          }
                        />
                        <div className="pt-[6px] text-2xs font-light text-gray7">
                          Tối đa 5 ảnh cho mỗi sản phẩm
                        </div>
                      </Form.Item>
                    </div>
                  ))}
                </div>
              )}
            </Form.List>
          </Form>
          <div
            className="bg-white px-[16px] pb-[20px] pt-[12px]"
            style={{ boxShadow: "0px -4px 24px 0px #00000014" }}
          >
            <Button
              text={
                <div className="text-base font-normal text-white">
                  Đánh giá ngay
                </div>
              }
              className="h-[39px] w-full rounded-[24px] bg-green6 px-[12px]"
              onClick={ratingform.submit}
            />
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

export { RatingSheet };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const ratings = Array(2).fill({});
