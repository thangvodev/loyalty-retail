import React from "react";
import { SubmitFloat } from "./submit-float";
import { CheckoutForm } from "./checkout-form";
import { Form } from "../common/form";

const status = "delivered";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <CheckoutForm form={form} />
      <SubmitFloat status={status} />
    </div>
  );
};

export default Content;
