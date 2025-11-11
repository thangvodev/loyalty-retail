import React from "react";
import { Form } from "../common/form";
import { Input } from "antd";

import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { DeleteLocationPopup } from "./delete-location-popup";
import ChevronIcon from "../icons/ChevronIcon";

const AddAddressForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        className="flex flex-1 flex-col justify-between bg-white px-[16px] pb-[40px] pt-[20px]"
      >
        <div className="flex flex-col gap-[14px]">
          <Form.Item
            name="name"
            label={<div className="text-sm font-medium text-gray7">Họ tên</div>}
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
            labelCol={{ className: "!p-0" }}
            className="m-0"
          >
            <Input className="h-[45px] rounded-[8px]" placeholder="Vd: Nhà" />
          </Form.Item>
          <Form.Item
            name="name"
            label={
              <div className="text-sm font-medium text-gray7">
                Số điện thoại
              </div>
            }
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
            labelCol={{ className: "!p-0" }}
            className="m-0"
          >
            <Input className="h-[45px] rounded-[8px]" placeholder="Vd: Nhà" />
          </Form.Item>
          <div className="flex flex-col gap-[4px]">
            <Form.Item
              name="name"
              label={
                <div className="text-sm font-medium text-gray7">Địa chỉ</div>
              }
              rules={[{ required: true, message: "Vui lòng nhập tên" }]}
              labelCol={{ className: "!p-0" }}
              className="m-0"
            >
              <Input
                className="h-[45px] rounded-[8px]"
                placeholder="VD: 384/4/12 Đường 3/2, phường "
              />
            </Form.Item>
            <Form.Item
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.address !== currentValues.address
              }
              noStyle
            >
              {({ getFieldValue }) => {
                const address = getFieldValue("address");
                return (
                  <div
                    className="flex items-center justify-end gap-[4px]"
                    onClick={() => navigate("/current-location")}
                  >
                    <div className="text-sm font-medium text-green6">
                      {address ? "Xem trên bãn đồ" : "Chọn trên bản đồ"}
                    </div>
                    <ChevronIcon className="size-[10px] text-green6" />
                  </div>
                );
              }}
            </Form.Item>
          </div>
          <Form.Item
            name="notes"
            label={
              <div className="text-sm font-medium text-gray7">Ghi chú</div>
            }
            labelCol={{ className: "!p-0" }}
            className="m-0"
          >
            <Input
              className="h-[45px] rounded-[8px]"
              placeholder="Vd: Tầng, số căn hộ"
            />
          </Form.Item>
        </div>
      </Form>
      {/* Foot buttons */}
      <div className="flex gap-[12px] p-[16px]">
        <DeleteLocationPopup>
          {({ open }) => (
            <Button
              text={
                <div className="text-[15px] font-medium text-red5">Xóa</div>
              }
              className="p h-[44px] rounded-[40px] bg-red1"
              onClick={open}
            />
          )}
        </DeleteLocationPopup>
        <Button
          text={
            <div className="text-[15px] font-medium text-white">
              Lưu địa chỉ
            </div>
          }
          className="h-[44px] rounded-[40px] bg-green6"
        />
      </div>
    </>
  );
};

export { AddAddressForm };
