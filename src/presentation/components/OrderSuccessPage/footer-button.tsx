import React from "react";
import { Button } from "../common/button";

export const FooterButton = () => {
  return (
    <div>
      <Button
        text={
          <div className="text-base font-normal text-white">Xem chi tiết</div>
        }
        className="h-[39px] w-full rounded-[24px] bg-green6"
      />
    </div>
  );
};
