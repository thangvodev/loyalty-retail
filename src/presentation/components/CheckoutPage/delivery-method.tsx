import React, { FC } from "react";
import { Radio } from "../common/radio";
import { formatCurrency } from "../../utils/helpers";
import DeliveryFastIcon from "../../static/icons/delivery-fast.png";
import DeliveryIcon from "../../static/icons/delivery.png";

export const DeliveryMethod: TDeliveryMethod = ({ value, onChange }) => {
  return (
    <div
      className="rounded-[12px] bg-white p-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
    >
      <Radio.Group
        items={methods}
        render={(method) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <img
                src={method?.icon}
                alt=""
                className="size-[20px] object-contain"
              />
              <div className="text-xs font-medium">{method?.label}</div>
            </div>
            <div className="text-xs font-medium">
              {method?.price ? (
                formatCurrency(method.price)
              ) : (
                <div className="text-red6">Miễn phí</div>
              )}
            </div>
          </div>
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
    icon: DeliveryIcon,
    label: "Nhanh",
    price: 0,
    value: "1",
  },
  {
    icon: DeliveryFastIcon,
    label: "Hỏa tốc",
    price: 50000,
    value: "2",
  },
];

type TDeliveryMethod = FC<{
  value?: string;
  onChange?: (value: any) => void;
}>;
