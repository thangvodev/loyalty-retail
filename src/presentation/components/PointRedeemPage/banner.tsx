import React from "react";
import Promobanner from "../../static/images/promo-banner.jpg";

export const Banner = () => {
  return (
    <img
      src={Promobanner}
      alt=""
      className="h-[120px] w-full rounded-[12px] object-cover"
      style={{
        boxShadow: "0px 2px 4px 0px #0000000A, 0px 1px 1px 0px #00000005",
      }}
    />
  );
};
