import React from "react";
import AchiIcon from "../../static/icons/achie-icon.png";
import ActiveBadge from "../../static/images/active-badfe.png";
import LockedBadge from "../../static/images/locked-badge.png";
import LockedBadge2 from "../../static/images/locked-badge-2.png";

export const Achievement = () => {
  const badges = [
    { title: "Khách hàng tích cực", img: ActiveBadge, active: true },
    { title: "Khách hàng trung thành", img: LockedBadge, active: false },
    { title: "Khách hàng VIP", img: LockedBadge2, active: false },
  ];

  return (
    <div className="flex flex-col gap-3 rounded-[16px] bg-white p-[16px] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={AchiIcon} className="size-6 min-w-6" />
          <span className="text-[16px] font-medium text-[#212324]">
            Archievements
          </span>
        </div>

        <div className="flex size-fit items-center justify-center rounded-[24px] bg-green6 px-[6px] py-[5px] text-2xs font-normal text-white">
          Xem tất cả
        </div>
      </div>

      <div className="flex justify-start gap-[12px] overflow-x-auto overflow-y-hidden">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`relative flex cursor-pointer flex-col items-center transition-all duration-200`}
            style={{
              boxShadow: "0px 4px 10px 0px #00000014, 0px 1px 4px 0px #0000000",
            }}
          >
            <img
              src={badge.img}
              alt={badge.title}
              className="h-[56px] object-contain"
            />
            <div
              className={`absolute bottom-0 rounded-[24px] p-1 text-[6px] font-normal ${
                badge.active ? "bg-white text-orange8" : "bg-gray1 text-gray5"
              }`}
            >
              {badge.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
