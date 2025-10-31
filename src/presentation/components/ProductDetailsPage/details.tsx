import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import Rate from "../common/rate";
import { formatCurrency } from "../../utils/helpers";
import { Tabs } from "../common/tabs";
import { TabsProps } from "antd";
import { useNavigate } from "react-router-dom";
import { Rating } from "./rating";
import { ProductDetails } from "./product-details";

const Details = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [window.location.hash]);

  return (
    <div className="">
      <Tabs
        items={items}
        selectColor="#4CBA81"
        margin={12}
        onChange={(key) => navigate(`/products/1#${key}`)}
      />
      <div className="flex flex-col gap-[12px]">
        <div id="details">
          <ProductDetails />
        </div>
        <div id="rating">
          <Rating />
        </div>
      </div>
    </div>
  );
};

export { Details };

const items: TabsProps["items"] = [
  {
    key: "details",
    label: <div className="text-sm">Thông tin sản phẩm</div>,
  },
  {
    key: "rating",
    label: <div className="text-sm">Đánh giá</div>,
  },
];
