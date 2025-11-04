import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import { CloseOutlined } from "@ant-design/icons";
import SharePopupHeadIcon from "../../static/icons/share-popup.svg";
import ShareIcon from "../icons/ShareIcon";

export const SharePopup: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleShare = () => {
    setIsModalOpen(false);
  };
  // if (!isModalOpen) return;
  return (
    <>
      <Modal
        visible={isModalOpen}
        title={
          (
            <>
              <div className="text-pretty text-lg font-semibold text-[#474747]">
                Chia sẻ app với bạn bè, đồng nghiệp
              </div>
              <div
                className="absolute right-[15px] top-[5px]"
                onClick={handleCancel}
              >
                <CloseOutlined className="text-[14px] text-[#686666]" />
              </div>
            </>
          ) as unknown as string
        }
        onClose={() => {
          setIsModalOpen(false);
        }}
        modalStyle={{
          overflow: "visible",
          padding: "48px 24px 24px",
          borderRadius: "12px",
        }}
      >
        <>
          <img
            src={SharePopupHeadIcon}
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col gap-[24px] pt-[24px]">
            {/* Link copy */}
            <div className="flex rounded-lg border border-[#F2F4F7] bg-gray1 p-1">
              <div className="line-clamp-1 flex flex-1 items-center px-2 text-sm font-medium text-gray6">
                <span className="truncate">Zalo.mini/app_healthcareapp</span>
              </div>
              <Button
                text={
                  <div className="text-xs font-medium text-black">Copy</div>
                }
                className="shadow-copy-button h-[30px] flex-none rounded-[4px] bg-white px-6"
                onClick={() =>
                  navigator.clipboard.writeText("Zalo.mini/app_healthcareapp")
                }
              />
            </div>
            {/* Share button */}
            <div className="flex flex-col gap-[12px]">
              <div className="text-center text-xs font-medium text-gray5">
                Hoặc
              </div>
              <Button
                text={
                  <div className="flex items-center justify-center gap-[10px]">
                    <span className="text-[11px] font-medium text-white">
                      Chia sẻ ứng dụng
                    </span>
                    <ShareIcon className="text-white" />
                  </div>
                }
                className="flex items-center justify-center rounded-[8px] bg-green6 py-[8px]"
                onClick={handleShare}
              />
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};
