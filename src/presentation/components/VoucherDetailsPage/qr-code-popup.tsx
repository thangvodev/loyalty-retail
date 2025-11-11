import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import { Modal } from "zmp-ui";
import QRImg from "../../static/images/qr.png";
import { CloseOutlined } from "@ant-design/icons";

const QrCodePopup: FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleAccept() {
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          visible={visible}
          title={
            (
              <div
                className="absolute right-0 top-0 size-[16px] -translate-y-[40px]"
                onClick={handleCancel}
              >
                <CloseOutlined className="text-white" />
              </div>
            ) as unknown as string
          }
          onClose={() => {
            setVisible(false);
          }}
          zIndex={9999}
          maskClassName="!z-[9999]"
          modalStyle={{
            overflow: "visible",
            width: "251px",
            borderRadius: "12px",
          }}
        >
          <>
            <div className="flex flex-col items-center gap-[12px] px-[14px] py-[20px]">
              <div className="flex items-center gap-[7px]">
                <div className="text-xs font-normal text-gray7">
                  Mã khuyến mãi:
                </div>
                <div className="flex h-[21px] items-center justify-center rounded-[12px] bg-gray1 px-[8px] text-[11px] font-medium">
                  QQI3443545
                </div>
                <Button
                  text={
                    <div className="text-[11px] font-medium text-orange6">
                      Copy
                    </div>
                  }
                  className="h-[21px] rounded-[8px] border border-orange6 px-[8px]"
                />
              </div>
              <div className="size-[144px]">
                <img src={QRImg} className="w-full object-contain" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 translate-y-[40px] text-center text-base font-normal text-white">
              Đưa mã này cho thu ngân
            </div>
          </>
        </Modal>,
        document.body,
      )}
    </>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

export { QrCodePopup };
