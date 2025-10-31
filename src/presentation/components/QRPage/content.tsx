import React, { useEffect, useState } from "react";
import { Instruction } from "./instruction";
import { QR } from "./qr";
import { SuccessPopup } from "./success-popup";
import { Buttons } from "./buttons";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsModalOpen(true);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex size-full flex-col items-center justify-center gap-[16px]">
      <Instruction />
      <QR />
      <Buttons />
      <SuccessPopup open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Content;
