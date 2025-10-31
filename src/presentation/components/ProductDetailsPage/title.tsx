import React, { FC, useState } from "react";
import Rate from "../common/rate";
import { formatCurrency } from "../../utils/helpers";
import clsx from "clsx";

const Title = () => {
  const [currentColor, setCurrentColor] = useState<string>("");

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[8px]">
        <ColorPicker
          color={currentColor}
          onChange={(key) => setCurrentColor(key)}
        />
        <div className="text-base font-normal">Set công sở BST Thu Đông</div>
        <div className="flex items-center gap-[8px]">
          <div className="text-xs font-normal">ATF1243</div>
          <Rate size={10} />
        </div>
      </div>
      <div className="flex items-center gap-[8px]">
        <div className="text-xl font-semibold text-red6">
          {formatCurrency(199000)}
        </div>
        <div className="text-sm font-normal text-gray7">
          {formatCurrency(250000)}
        </div>
      </div>
    </div>
  );
};

const ColorPicker: FC<{ color: string; onChange: (key) => void }> = ({
  color,
  onChange,
}) => {
  return (
    <div className="flex h-[32px] w-[141px] items-center justify-between">
      {Object.entries(colors).map((item, index) => {
        const key = item[0];
        const value = item[1].color;

        return (
          <div
            key={index}
            className={clsx(
              "size-[32px] overflow-hidden rounded-full border-[1.45px] border-dashed border-transparent p-[2px]",
              { "!border-[#000000]": color === key },
            )}
            onClick={() => onChange(key)}
          >
            <div
              className="size-full rounded-full border-[0.36px] border-[#ABABAB]"
              style={{ background: value }}
            />
          </div>
        );
      })}
    </div>
  );
};

export { Title };

const colors = {
  "1": {
    color: "#000000",
  },
  "2": {
    color: "#B4B3B3",
  },
  "3": {
    color: "#FFFFFF",
  },
  "4": {
    color: "#EB0909",
  },
};
