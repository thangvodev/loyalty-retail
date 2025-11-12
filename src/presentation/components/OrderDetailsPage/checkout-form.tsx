import React, { FC, useState } from "react";
import { DeliveryInfo } from "./delivery-info";
import { OrderDetails } from "./order-details";
import { Form } from "../common/form";
import { Rewards } from "./rewards";
import { OrderStatusRender } from "./order-status";
import { RatingDetails } from "./rating-details";

const status = "delivered";
const rated = true;

const CheckoutForm: TCheckoutForm = ({ form }) => {
  return (
    <Form
      form={form}
      className="flex h-fit w-full flex-col gap-[16px] p-[16px]"
    >
      <div className="flex flex-col gap-[8px]">
        <OrderStatusRender status={status} />
        {(status as any) === "delivered" ? (
          <RatingDetails rated={rated} />
        ) : null}
        <Form.Item
          name="deliveryInfo"
          label="Thông tin vận chuyển"
          labelCol={{ className: "!p-0" }}
          className="m-0"
        >
          <DeliveryInfo />
        </Form.Item>
      </div>
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
        label="Quà tặng"
        labelCol={{ className: "!p-0" }}
        className="m-0"
      >
        <Rewards />
      </Form.Item>
    </Form>
  );
};

export { CheckoutForm };

type TCheckoutForm = FC<{
  form?: any;
}>;
