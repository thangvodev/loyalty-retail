import { UploadFile } from "antd";
import React, { FC } from "react";
import {
  CustomItemRender,
  ImageUpload,
  UploadImage,
} from "../common/image-upload";
import EditIcon from "../../static/icons/edit-icon-blue.png";
import AddImageIcon from "../../static/icons/gallery-add.png";
import CloseFilledIcon from "../icons/CloseFilledIcon";

export const ProfileImageUpload: FC<Props> = ({ images, setImages }) => {
  const customItemRender: CustomItemRender = ({
    maxCount,
    originNode,
    file,
    fileList,
    actions,
  }) => {
    const imageUrl = file.url || file.preview || "";

    return (
      <div className="relative">
        <div
          className="size-[80px] overflow-hidden rounded-full border-[2px] border-white"
          onClick={actions.preview}
          style={{ boxShadow: " 0px 8px 13.33px 0px #89878733" }}
        >
          <img src={imageUrl} className="size-full object-cover" />
        </div>

        {/* Add image button */}
        {maxCount && maxCount === 1 ? (
          <div
            className="absolute bottom-0 right-0 z-10 size-[20px] rounded-full bg-white p-[3px]"
            style={{ boxShadow: "0px 6.43px 17.14px 0px #0000001A" }}
            onClick={(e) => {
              e.stopPropagation();
              const fileInput = document.querySelector(
                '.ant-upload input[type="file"]',
              ) as HTMLInputElement;
              if (fileInput) {
                fileInput.click();
              }
            }}
          >
            <img src={EditIcon} alt="" className="size-full object-cover" />
          </div>
        ) : null}

        {/* Remove image button */}
        {maxCount && maxCount > 1 ? (
          <div
            className="absolute right-0 top-0 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-gray-300"
            style={{ boxShadow: "0px 4px 40px 0px #AEB5AF1F" }}
            onClick={(e) => {
              e.stopPropagation();
              actions.remove();
            }}
          >
            <CloseFilledIcon className="size-[10px] text-white" />
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <ImageUpload
      images={images}
      setImages={setImages}
      customItemRender={customItemRender}
      maxCount={1}
    />
  );
};

type Props = {
  images: UploadImage[];
  setImages: (images: UploadFile[]) => void;
};
