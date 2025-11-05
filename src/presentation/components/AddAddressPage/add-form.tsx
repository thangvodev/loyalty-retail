import React from "react";
import { Form } from "../common/form";
import { Input } from "antd";
import { Select } from "../common/select";
import LocationGoogleMap from "../icons/LocationGoogleMap";
import { useNavigate } from "react-router-dom";

export const AddForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <Form form={form} className="flex flex-1 flex-col gap-[14px] px-[16px]">
      <Form.Item
        name="name"
        label="Tên"
        labelCol={{ className: "!p-0" }}
        className="m-0"
        required
      >
        <Input placeholder="Vd: Nhà" className="h-[47px] !rounded-[8px]" />
      </Form.Item>
      <Form.Item
        name="province"
        label="Tỉnh"
        labelCol={{ className: "!p-0" }}
        className="m-0"
        required
      >
        <Select
          options={ratings}
          colorBorder="transparent"
          className="h-[47px] overflow-hidden rounded-[8px] border border-stroke3"
          placeholder="Chọn tỉnh"
        />
      </Form.Item>
      <Form.Item
        name="ward"
        label="Phường"
        labelCol={{ className: "!p-0" }}
        className="m-0"
        required
      >
        <Select
          options={ratings}
          colorBorder="transparent"
          className="h-[47px] overflow-hidden rounded-[8px] border border-stroke3"
          placeholder="Chọn phường"
        />
      </Form.Item>
      <Form.Item
        name="address"
        label="Số nhà, tên đường"
        labelCol={{ className: "!p-0" }}
        className="m-0"
        required
      >
        <Input
          placeholder="Vd: Tầng, số căn hộ"
          className="h-[47px] !rounded-[8px]"
        />
      </Form.Item>
      <Form.Item
        label="Địa chỉ google map"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Input
          placeholder="Lat"
          className="h-[47px] !rounded-[8px]"
          suffix={<LocationGoogleMap className="size-[21px] text-green5" />}
          readOnly
          onClick={() => navigate("/current-location")}
        />
      </Form.Item>
    </Form>
  );
};

const ratings = [
  {
    value: "1",
    label: <div className="text-sm font-normal text-neutral8">1</div>,
  },
];
