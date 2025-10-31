import React from "react";
import TableOrderIcon from "../static/icons/table-order.svg";
import DeliveryOrderIcon from "../static/icons/delivery-order.svg";
import TakeoutOrderIcon from "../static/icons/takeout-order.svg";

const orderMethod = {
  tableOrder: {
    label: "",
    icon: TableOrderIcon,
  },
  deliveryOrder: {
    label: "Giao hàng: ",
    icon: DeliveryOrderIcon,
  },
  takeoutOrder: {
    label: "Đến lấy: ",
    icon: TakeoutOrderIcon,
  },
};

export { orderMethod };

export type TOrderMethod = keyof typeof orderMethod;
