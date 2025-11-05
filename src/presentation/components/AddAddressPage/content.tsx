import React from "react";
import { AddForm } from "./add-form";
import { SaveAddressFloat } from "./save-address-float";

const Content = () => {
  return (
    <div className="flex w-full flex-col pt-[14px]">
      <AddForm />
      <SaveAddressFloat />
    </div>
  );
};

export default Content;
