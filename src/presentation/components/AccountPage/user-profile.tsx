import React, { useState } from "react";
import { UploadImage } from "../common/image-upload";
import { ProfileImageUpload } from "./profile-image-upload";
import GoldBg from "../../static/images/gold-bg.jpg";

export const UserProfile = () => {
  const [images, setImages] = useState<UploadImage[]>([]);

  return (
    <div className="flex flex-col items-center justify-center gap-[8px]">
      <ProfileImageUpload images={images} setImages={setImages} />
      <div className="flex flex-col items-center gap-[4px]">
        <div className="text-sm font-semibold">Minh Vy</div>
        <div className="relative flex h-[14px] w-[26px] items-center justify-center overflow-hidden rounded-[12px]">
          <img src={GoldBg} alt="" className="absolute z-[0] size-full" />
          <div className="z-[10] text-[8px] font-medium text-white">Gold</div>
        </div>
      </div>
    </div>
  );
};
