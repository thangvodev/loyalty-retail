import clsx from "clsx";
import React, { FC, useState } from "react";

const SubCategories = () => {
  const [currentSubCategory, setCurrentSubCategory] = useState<number>(0);

  return (
    <div
      className="flex shrink-0 flex-col pt-[12px]"
      style={{ boxShadow: "4px 0px 12px 0px #D0D5D838" }}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <SubCategoriesItem
          key={index}
          active={index === currentSubCategory}
          onClick={() => setCurrentSubCategory(index)}
        />
      ))}
    </div>
  );
};

const SubCategoriesItem: FC<{ active?: boolean; onClick: any }> = ({
  onClick,
  active,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center border-r-2 border-transparent p-[10px]",
        {
          "!border-green5": active,
        },
      )}
      onClick={onClick}
    >
      <div
        className={clsx("text-2xs font-medium text-gray6", {
          "!font-semibold !text-green6": active,
        })}
      >
        Áo khoác thu đông
      </div>
    </div>
  );
};

export { SubCategories };
