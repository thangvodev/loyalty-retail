import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { createPortal } from "react-dom";
import { Divider } from "antd";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { useNavigate } from "react-router-dom";

export const SuccessPopup: FC<Props> = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      {createPortal(
        <Modal
          visible={open}
          onClose={onClose}
          modalStyle={{
            zIndex: 50,
            margin: "0 16px 75px",
            padding: "14px 12px",
            width: "100%",
            height: "fit-content",
            borderRadius: "8px",
            boxShadow: "0px 4px 40px 0px #3A3A3A33",
            background: "#4CBA81",
          }}
          mask={false}
          className="bottom-modal"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <CheckMarkIcon className="size-[20px] text-white" />
              <div className="text-sm font-normal text-white">
                Đã lưu vào{" "}
                <span className="font-semibold">“Ưu đãi đã đổi”</span>
              </div>
            </div>
            <div
              className="flex items-center gap-[4px]"
              onClick={() => navigate("/gift-wallet")}
            >
              <div className="text-sm font-semibold text-white">Xem</div>
              <ArrowLeftIcon className="size-[16px] rotate-180 p-[1px] text-white" />
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
