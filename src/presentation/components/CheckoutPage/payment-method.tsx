import React, { FC } from "react";
import { Radio } from "../common/radio";
import { formatCurrency } from "../../utils/helpers";

export const PaymentMethod: TDeliveryMethod = ({ value, onChange }) => {
  return (
    <div
      className="rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <Radio.Group
        items={methods}
        render={(method) => (
          <div className="text-xs font-medium">{method?.label}</div>
        )}
        className="flex w-full flex-col gap-[14px]"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const methods = [
  {
    label: "Thanh toán online",
    value: "1",
  },
  {
    label: "Thanh toán COD - Tiền mặt",
    value: "2",
  },
];

type TDeliveryMethod = FC<{
  value?: string;
  onChange?: (value: any) => void;
}>;
