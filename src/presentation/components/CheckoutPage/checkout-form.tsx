import React, { FC } from "react";
import { RecieverInfo } from "./reciever-info";
import { OrderDetails } from "./order-details";
import { Notes } from "./notes";
import { DeliveryMethod } from "./delivery-method";
import { PaymentMethod } from "./payment-method";
import { Form } from "../common/form";

const CheckoutForm: TCheckoutForm = ({ form }) => {
  return (
    <Form
      form={form}
      className="flex h-fit w-full flex-col gap-[16px] p-[16px]"
    >
      <Form.Item
        name="recieverInfo"
        label="Thông tin nhận hàng"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <RecieverInfo />
      </Form.Item>
      <Form.Item
        name="recieverInfo"
        label="Tóm tắt đơn hàng"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <OrderDetails />
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
      <Form.Item
        name="paymentMethod"
        label="Phương thức thanh toán"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <PaymentMethod />
      </Form.Item>
    </Form>
  );
};

export default CheckoutForm;

type TCheckoutForm = FC<{
  form?: any;
}>;
