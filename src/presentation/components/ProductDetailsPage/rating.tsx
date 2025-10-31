import React from "react";
import RatingChart from "./rating-chart";
import Feedbacks from "./rating-feedbacks";

export const Rating = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-base font-medium">Đánh giá</div>
      <div className="flex flex-col gap-[20px]">
        <RatingChart />
        <Feedbacks />
      </div>
    </div>
  );
};
