import { Divider } from "antd";
import React from "react";
import ClockIcon from "../icons/ClockIcon";

export const VoucherDetails = () => {
  return (
    <div className="flex -translate-y-[80px] flex-col gap-[12px] px-[20px]">
      {/* Brief information */}
      <div
        className="flex flex-col gap-[8px] rounded-[12px] bg-white py-[8px]"
        style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
      >
        <div className="flex flex-col items-center gap-[8px]">
          <div className="text-xl font-semibold">Voucher giảm 50%</div>
          <div className="text-sm font-medium text-gray6">
            Dành cho đơn hàng trên 1tr
          </div>
        </div>
        <Divider dashed className="m-0" />
        <div className="text-center text-[11px] font-normal text-gray6">
          Mã giảm giá phát hành lúc 15:29, 20/05/2025
        </div>
        <div className="flex items-center justify-center gap-[4px]">
          <ClockIcon className="size-[18px] text-red6" />
          <div className="text-xs font-normal text-red6">
            Hạn sử dụng: 22/07/2024
          </div>
        </div>
      </div>
      {/* Policies */}
      <div
        className="flex flex-col gap-[4px] rounded-[12px] bg-white p-[12px]"
        style={{ boxShadow: "0px 4px 24px 0px #BABABA1F" }}
      >
        <div className="text-base font-medium">Điều khoản sử dụng</div>
        <ul className="list-disc whitespace-pre-wrap pl-[24px] text-sm font-normal text-gray8">
          {`Áp dụng cho hóa đơn từ 500.000đ trở lên.
Chỉ áp dụng tại các cửa hàng thời trang liên kết khi thanh toán bằng thẻ Techcombank.
Giảm ngay 100.000đ vào tổng hóa đơn.
Không áp dụng đồng thời với các chương trình khuyến mãi hoặc ưu đãi khác.
Mỗi khách hàng chỉ được sử dụng 1 lần duy nhất trong suốt thời gian khuyến mãi.`
            .split("\n")
            .map((line, index) => (
              <li key={index}>{line}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};
