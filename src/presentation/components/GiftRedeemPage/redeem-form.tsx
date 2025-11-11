import React, { FC } from "react";
import { RecieverInfo } from "./reciever-info";
import { GiftDetails } from "./gift-details";
import { Notes } from "./notes";
import { DeliveryMethod } from "./delivery-method";
import { Form } from "../common/form";

const RedeemForm: TCheckoutForm = ({ form }) => {
  return (
    <Form
      form={form}
      className="flex h-fit w-full flex-1 flex-col gap-[16px] p-[16px]"
    >
      <Form.Item
        name="recieverInfo"
        label="Điền thông tin để nhận quà"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <RecieverInfo />
      </Form.Item>
      <Form.Item
        name="recieverInfo"
        label="Quà tặng"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <GiftDetails />
      </Form.Item>
      <Form.Item
        name="recieverInfo"
        label="Ghi chú"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Notes />
      </Form.Item>
      <Form.Item
        name="deliveryMethod"
        label="Phương thức giao hàng"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <DeliveryMethod />
      </Form.Item>
    </Form>
  );
};

export { RedeemForm };

type TCheckoutForm = FC<{
  form?: any;
}>;
