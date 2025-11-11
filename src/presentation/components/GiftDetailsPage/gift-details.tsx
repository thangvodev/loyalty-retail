import { Divider } from "antd";
import React, { FC } from "react";
import ClockIcon from "../icons/ClockIcon";
import BarCodeImg from "../../static/images/bar-code.png";
import { Button } from "../common/button";
import { BarCodePopup } from "./bar-code-popup";

const GiftDetails: TGiftDetails = ({ status = "notRedeemed" }) => {
  return (
    <div className="flex -translate-y-[80px] flex-col gap-[12px] px-[20px]">
      {/* Brief information */}
      <div
        className="flex flex-col gap-[8px] overflow-hidden rounded-[12px] bg-white py-[8px]"
        style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
      >
        <div className="flex flex-col items-center gap-[8px]">
          <div className="text-xl font-semibold">Quà tặng: 1 mũ caphat</div>
          <div className="text-sm font-medium text-gray6">
            Dành cho đơn hàng trên 1tr
          </div>
        </div>
        {/* QR code */}
        {status === "notRedeemed" ? null : (
          <div className="flex flex-col items-center gap-[4px]">
            <div className="h-[81px] w-full px-[12px] py-[5px]">
              <BarCodePopup>
                {({ open }) => (
                  <img
                    src={BarCodeImg}
                    alt=""
                    className="size-full"
                    onClick={open}
                  />
                )}
              </BarCodePopup>
            </div>
            <div className="text-[11px] font-normal text-orange6">
              * Đưa mã này cho thu ngân
            </div>
            <div className="flex items-center justify-center gap-[7px]">
              <div className="text-xs font-normal text-gray7">
                Mã khuyến mãi:
              </div>
              <div className="flex h-[21px] items-center justify-center rounded-[12px] bg-gray1 px-[8px]">
                <div className="text-[11px] font-medium">QQI3443545</div>
              </div>
              <Button
                text={
                  <div className="text-[11px] font-medium text-orange6">
                    Copy
                  </div>
                }
                className="bg-white] h-[21px] flex-none rounded-[8px] border border-orange6 px-[8px]"
              />
            </div>
          </div>
        )}
        <div className="relative">
          <div className="absolute left-0 top-0 size-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface2" />
          <div className="absolute right-0 top-0 size-[11px] -translate-y-1/2 translate-x-1/2 rounded-full bg-surface2" />
          <Divider dashed className="m-0 border-[1.5px]" />
        </div>
        {/* Time */}
        {status === "expired" ? (
          <div className="flex items-center justify-center gap-[4px]">
            <ClockIcon className="size-[18px] text-red6" />
            <div className="text-xs font-normal text-red6">
              Đã hết hạn sử dụng: 22/07/2024
            </div>
          </div>
        ) : (
          <>
            <div className="text-center text-[11px] font-normal text-gray6">
              Mã giảm giá phát hành lúc 15:29, 20/05/2025
            </div>
            <div className="flex items-center justify-center gap-[4px]">
              <ClockIcon className="size-[18px] text-red6" />
              <div className="text-xs font-normal text-red6">
                Hạn sử dụng: 22/07/2024
              </div>
            </div>
          </>
        )}
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

export { GiftDetails };

type TGiftDetails = FC<{
  status: "notRedeemed" | "expired";
}>;
