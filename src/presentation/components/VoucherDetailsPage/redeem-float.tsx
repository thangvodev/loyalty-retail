import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/button";
import CoinIcon from "../../static/icons/coin-gold.png";

const RedeemFloat: TRedeemFloat = ({ status, onRedeem, onUse }) => {
  const navigate = useNavigate();

  return (
    <>
      {status === "notRedeemed" ? (
        <div
          className="sticky inset-x-0 bottom-0 flex items-center gap-[12px] bg-white px-[16px] pb-[16px] pt-[8px]"
          style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-[4px] rounded-[4px] bg-[#FCF9F5] p-[4px]">
              <div className="text-xs font-normal text-green6">Đang có</div>
              <div className="flex items-center gap-[2px]">
                <div className="text-xs font-medium text-orange6">600</div>
                <img src={CoinIcon} alt="" className="size-[12px]" />
              </div>
            </div>
            <div className="flex items-center gap-[4px] px-[4px]">
              <div className="text-xl font-medium text-orange6">500</div>
              <img src={CoinIcon} alt="" className="size-[18px]" />
            </div>
          </div>
          <Button
            text={
              <div className="text-base font-normal text-white">
                Đổi quà ngay
              </div>
            }
            className="flex h-[43px] flex-1 items-center justify-center rounded-[24px] border border-[#FFFFFFAB] bg-green6"
            onClick={onRedeem}
          />
        </div>
      ) : status === "redeemed" ? (
        <div
          className="sticky inset-x-0 bottom-0 flex items-center gap-[12px] bg-white px-[16px] pb-[16px] pt-[8px]"
          style={{ boxShadow: "0px -4px 24px 0px #E7EFF3" }}
        >
          <Button
            text={
              <div className="text-base font-normal text-white">
                Sử dụng ngay
              </div>
            }
            className="flex h-[43px] flex-1 items-center justify-center rounded-[24px] border border-[#FFFFFFAB] bg-green6"
            onClick={onUse}
          />
        </div>
      ) : null}
    </>
  );
};

export { RedeemFloat };

type TRedeemFloat = FC<{
  status: "notRedeemed" | "redeemed" | "active" | "expired";
  onRedeem?: () => void;
  onUse?: () => void;
}>;
