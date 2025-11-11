import React from "react";

import { SubmitFloat } from "./submit-float";
import { RedeemForm } from "./redeem-form";
import { Form } from "../common/form";

const Content = () => {
  const [form] = Form.useForm();

  return (
    <div className="flex flex-col">
      <RedeemForm form={form} />
      <SubmitFloat />
    </div>
  );
};

export default Content;
