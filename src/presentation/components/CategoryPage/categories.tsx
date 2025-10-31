import React from "react";
import CategoryImg from "../../static/images/category.png";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px]">
      {Array.from({ length: 6 }).map((_, index) => (
        <CategoriesItem key={index} />
      ))}
    </div>
  );
};

const CategoriesItem = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center rounded-[4px] bg-[#F6F6F6] py-[16px]"
      onClick={() => navigate("/shop")}
    >
      <img src={CategoryImg} alt="" className="size-[100px] object-contain" />
      <div className="text-xs font-medium">Áo khoác mùa đông</div>
    </div>
  );
};

export { Categories };
