import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const DeleteLocationPopup: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  function handleCancel() {
    setVisible(false);
  }

  function handleFinish() {
    setVisible(false);
    navigate("/order-cancel");
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Modal
          visible={visible}
          title={
            (
              <>
                <div className="text-balance pt-[18px] text-lg font-medium">
                  Xác nhận
                </div>
              </>
            ) as unknown as string
          }
          onClose={() => {
            setVisible(false);
          }}
          verticalActions
        >
          <div className="flex flex-col gap-[12px] px-[14px] py-[18px]">
            <div className="text-pretty text-center text-sm font-normal text-gray8">
              Bạn chắc chắn muốn xoá{" "}
              <span className="font-medium text-black">Nhà</span> khỏi{" "}
              <span className="font-medium text-black">Sổ địa chỉ?</span>
            </div>
            <div className="flex">
              <Button
                text={<div className="text-sm font-medium">Hủy</div>}
                className="rounded-[4px] px-3 py-[10px]"
                onClick={handleCancel}
              />
              <Button
                text={<div className="text-sm font-medium text-red5">Xóa</div>}
                className="rounded-[4px] px-3 py-[10px]"
              />
            </div>
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

export { DeleteLocationPopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
