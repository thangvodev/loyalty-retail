import React from "react";
import CustomerImg from "../../static/images/customer.png";

export const UserProfile = () => {
  return (
    <div className="flex gap-[16px] px-[16px] py-[12px]">
      <img
        src={CustomerImg}
        alt=""
        className="size-[48px] rounded-full border-[1.2px] border-white object-cover"
        style={{ boxShadow: "0px 4.8px 8px 0px #89878733" }}
      />
      <div className="flex flex-col gap-[4px]">
        <div className="text-base font-semibold">Nguyễn Mỹ Linh</div>
        <div className="text-sm font-normal text-[#7E7E7E]">0293439435</div>
      </div>
    </div>
  );
};
