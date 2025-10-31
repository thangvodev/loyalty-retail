import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { createPortal } from "react-dom";
import { CloseOutlined } from "@ant-design/icons";
import PresentCoinIcon from "../../static/icons/present-coin.png";
import CoinIcon from "../../static/icons/coin-gold.png";
import { Divider } from "antd";

export const SuccessPopup: FC<Props> = ({ open, onClose }) => {
  return (
    <>
      {createPortal(
        <Modal
          visible={open}
          title={
            (
              <div
                className="absolute right-[15px] top-[5px]"
                onClick={onClose}
              >
                <CloseOutlined className="text-[12px] text-gray6" />
              </div>
            ) as unknown as string
          }
          onClose={onClose}
          modalStyle={{
            zIndex: 50,
            margin: "0 16px 48px",
            padding: "12px",
            width: "100%",
            height: "fit-content",
            borderRadius: "12px",
            boxShadow: "0px 4px 40px 0px #3A3A3A33",
          }}
          mask={false}
          className="bottom-modal"
        >
          <div className="flex items-center gap-[12px]">
            <div
              className="flex size-[52px] items-center justify-center rounded-[11.14px] p-[7.43px]"
              style={{
                background:
                  "linear-gradient(210.03deg, #FFF8F2 7.73%, #FFF0E0 92.27%)",
              }}
            >
              <img src={PresentCoinIcon} alt="" className="size-full" />
            </div>
            <Divider dashed type="vertical" className="m-0 h-[48px]" />
            <div className="flex flex-col gap-[9px]">
              <div className="text-base font-semibold leading-none">
                Tích điểm thành công
              </div>
              <div className="flex items-center gap-[4px]">
                <div className="text-xs font-medium leading-none text-gray6">
                  Bạn được cộng thêm
                </div>
                <div className="flex items-center gap-[4px]">
                  <div className="text-base font-semibold leading-none text-[#694D17]">
                    50
                  </div>
                  <img src={CoinIcon} alt="" className="size-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

type Props = {
  open?: boolean;
  onClose?: () => void;
};
