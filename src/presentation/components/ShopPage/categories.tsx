import React, { FC, useState } from "react";
import CategoryImg from "../../static/images/category.png";
import clsx from "clsx";
import { CheckableTag } from "../common/tag";

const Categories = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="flex gap-[18px] px-[16px] pb-[20px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <CategoriesItem
          key={index}
          active={index === active}
          onClick={() => setActive(index)}
        />
      ))}
    </div>
  );
};

const CategoriesItem: FC<{ active?: boolean; onClick: any }> = ({
  active,
  onClick,
}) => {
  return (
    <CheckableTag
      className={clsx(
        "size-[48px] rounded-full border-[1.78px] bg-transparent",
        { "!border-green6": active },
      )}
      checkIconSize={12.7}
      checked={active}
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-[3.56px]">
        <img
          src={CategoryImg}
          alt=""
          className="size-full rounded-full bg-white"
        />
        <div className="text-2xs font-normal text-gray8">Áo khoác</div>
      </div>
    </CheckableTag>
  );
};

export { Categories };
