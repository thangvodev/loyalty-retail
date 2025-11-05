import React, { useState } from "react";
import { Form } from "../common/form";
import { UploadImage } from "../common/image-upload";
import { ProfileImageUpload } from "./profile-image-upload";
import { Input } from "antd";
import { Button } from "../common/button";
import { Select } from "../common/select";

const ProfileForm = () => {
  const [form] = Form.useForm();
  const [images, setImages] = useState<UploadImage[]>([]);

  const initialValues = {
    phone: "0394358495",
    name: "Thu Hồng",
    gender: "2",
  };

  return (
    <Form form={form} initialValues={initialValues}>
      <div className="flex flex-col gap-[24px]">
        {/* Profile image */}
        <div className="flex items-center justify-center">
          <ProfileImageUpload images={images} setImages={setImages} />
        </div>
        {/* Other information */}
        <div className="flex flex-col gap-[14px]">
          <Form.Item
            label="Họ tên"
            name="name"
            required
            labelCol={{ style: { padding: 0, fontSize: 12 } }}
            style={{ marginBottom: 0 }}
          >
            <Input
              placeholder="Nhập họ tên"
              className="h-[50px] rounded-[8px] border-gray2 text-xs"
            />
          </Form.Item>
          <Form.Item
            label="Giới tính"
            name="gender"
            labelCol={{ style: { padding: 0, fontSize: 12 } }}
            style={{ marginBottom: 0 }}
          >
            <Select
              className="h-[50px] border-gray2"
              options={[
                { value: "1", label: "Nam" },
                { value: "2", label: "Nữ" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            required
            labelCol={{ style: { padding: 0, fontSize: 12 } }}
            style={{ marginBottom: 0 }}
          >
            <Input
              placeholder="Nhập tên khách hàng"
              className="h-[50px] rounded-[8px] border-gray2 text-xs"
              disabled
            />
          </Form.Item>
        </div>
        {/* Submit button */}
        <Button
          text={
            <div className="text-base font-medium text-white">Lưu thay đổi</div>
          }
          className="flex h-[50px] flex-none items-center justify-center rounded-[12px] bg-green6"
        />
      </div>
    </Form>
  );
};

export default ProfileForm;
