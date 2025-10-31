import React, { FC } from "react";
import GoldBg from "../../static/images/gold-bg.jpg";
import SilverBg from "../../static/images/silver-bg.jpg";
import BarCode from "../../static/images/bar-code.png";
import { Divider, Progress } from "antd";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { useNavigate } from "react-router-dom";

const CardMember: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[12px] bg-white px-[14px] py-[12px]">
        {/* Content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="text-sm font-semibold text-gray8">Minh Vy</div>
            <div className="relative flex h-[14px] w-[39px] items-center justify-center overflow-hidden rounded-[12px] bg-green6">
              <div className="z-[10] text-[8px] font-medium text-white">
                Member
              </div>
            </div>
          </div>
          <div
            className="flex h-[20px] items-center justify-center rounded-[24px] bg-green1 px-[6px]"
            onClick={navigateMemberCards}
          >
            <div className="text-2xs font-medium text-green7">
              Xem quyền lợi hạng
            </div>
          </div>
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#4CBA81"
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[10px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

const CardSilver: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[12px] bg-white px-[14px] py-[12px]">
        {/* Content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="text-sm font-semibold text-gray8">Minh Vy</div>
            <div className="relative flex h-[14px] w-[29px] items-center justify-center overflow-hidden rounded-[12px]">
              <img src={SilverBg} alt="" className="absolute z-[0] size-full" />
              <div className="z-[10] text-[8px] font-medium text-white">
                Silver
              </div>
            </div>
          </div>
          <div
            className="flex h-[20px] items-center justify-center rounded-[24px] bg-gray1 px-[6px]"
            onClick={navigateMemberCards}
          >
            <div className="text-2xs font-medium text-black">
              Xem quyền lợi hạng
            </div>
          </div>
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor={{
              "0%": "#A0A0A0",
              "48.08%": "#E9E9E9 ",
              "100%": "#A0A0A0",
            }}
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[10px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

const CardGold: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[12px] bg-white px-[14px] py-[12px]">
        {/* Content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="text-sm font-semibold text-gray8">Minh Vy</div>
            <div className="relative flex h-[14px] w-[26px] items-center justify-center overflow-hidden rounded-[12px]">
              <img src={GoldBg} alt="" className="absolute z-[0] size-full" />
              <div className="z-[10] text-[8px] font-medium text-white">
                Gold
              </div>
            </div>
          </div>
          <div
            className="flex h-[20px] items-center justify-center rounded-[24px] bg-yellow1 px-[6px]"
            onClick={navigateMemberCards}
          >
            <div className="text-2xs font-medium text-orange8">
              Xem quyền lợi hạng
            </div>
          </div>
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#ECAA68"
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[10px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

const CardDiamond: FC<{ navigateQr?: any; navigateMemberCards?: any }> = ({
  navigateQr,
  navigateMemberCards,
}) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[12px]"
      style={{ boxShadow: "0px 4px 24px 0px #7F928624" }}
    >
      {/* Body */}
      <div className="relative flex flex-col gap-[12px] bg-white px-[14px] py-[12px]">
        {/* Content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="text-sm font-semibold text-gray8">Minh Vy</div>
            <div className="relative flex h-[14px] w-[42px] items-center justify-center overflow-hidden rounded-[12px]">
              <img
                src={GoldBg}
                alt=""
                className="absolute z-[0] size-full brightness-50 saturate-0"
              />
              <div className="z-[10] text-[8px] font-medium text-white">
                Diamond
              </div>
            </div>
          </div>
          <div
            className="flex h-[20px] items-center justify-center rounded-[24px] bg-black px-[6px]"
            onClick={navigateMemberCards}
          >
            <div className="text-2xs font-medium text-white">
              Xem quyền lợi hạng
            </div>
          </div>
        </div>
        {/* Progress */}
        <div className="z-10 flex flex-col gap-[8px]">
          <Progress
            size={{ height: 4 }}
            percent={50}
            showInfo={false}
            strokeColor="#000000"
            trailColor="#F2F2F2"
            className="leading-[0]"
          />
          <div className="flex justify-between">
            <div className="text-2xs font-semibold text-gray8">300 điểm</div>
            <div className="text-2xs font-semibold text-gray6">500 điểm</div>
          </div>
        </div>
      </div>
      <Divider dashed className="m-0 border-gray2" />
      {/* Footer */}
      <div className="z-10 flex items-center justify-between bg-white px-[16px] pb-[6px] pt-[4px]">
        <div
          className="h-[24px] w-[77.28px] overflow-hidden rounded-[4.38px] p-[2.87px]"
          style={{ boxShadow: "0px 2px 12px 0px #8A857F33" }}
        >
          <img src={BarCode} alt="" className="size-full" />
        </div>
        <div className="flex items-center gap-[4px]" onClick={navigateQr}>
          <div className="text-2xs font-medium leading-none text-gray6">
            Mở QR tích điểm sau khi mua hàng
          </div>
          <ArrowLeftIcon className="size-[10px] rotate-180 text-gray7" />
        </div>
      </div>
    </div>
  );
};

export const MemberCard: FC<MemberCardProps> = ({
  type,
  canNavigate = true,
}) => {
  const navigate = useNavigate();

  const navigateToQr = () => {
    navigate("/qr");
  };

  const navigateToMemberCards = () => {
    navigate("/member-cards");
  };

  switch (type) {
    case "member":
      return (
        <CardMember
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : () => {}}
        />
      );

    case "silver":
      return (
        <CardSilver
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : () => {}}
        />
      );

    case "gold":
      return (
        <CardGold
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : () => {}}
        />
      );

    case "diamond":
      return (
        <CardDiamond
          navigateQr={navigateToQr}
          navigateMemberCards={canNavigate ? navigateToMemberCards : () => {}}
        />
      );

    default:
      return <CardGold />;
  }
};

export type MemberCardProps = {
  type: "member" | "silver" | "gold" | "diamond";
  canNavigate?: boolean;
};
