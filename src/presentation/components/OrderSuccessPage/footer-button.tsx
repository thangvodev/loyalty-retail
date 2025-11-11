import React from "react";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

export const FooterButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        text={
          <div className="text-base font-normal text-white">Xem chi tiết</div>
        }
        className="h-[39px] w-full rounded-[24px] bg-green6"
        onClick={() => navigate("/orders/1")}
      />
    </div>
  );
};
