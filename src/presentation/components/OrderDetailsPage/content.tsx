import React from "react";
import { SubmitFloat } from "./submit-float";
import { OrderDetails } from "./order-details";
import { Form } from "../common/form";

const status = "delivered";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <OrderDetails form={form} />
      <SubmitFloat status={status} />
    </div>
  );
};

export default Content;
