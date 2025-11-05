import React from "react";
import { Button } from "../common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CategoryImg from "../../static/images/category.png";

export const Categories = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center justify-between px-[16px]">
        <div className="text-lg font-medium">Danh mục</div>
        <Button
          text={
            <div className="text-2xs font-normal text-white">Xem tất cả</div>
          }
          className="flex h-[22px] flex-none items-center justify-center rounded-[24px] bg-green6 px-[6px]"
        />
      </div>
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          className="h-full px-[16px]"
          pagination={true}
          modules={[Pagination]}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="!flex !w-[calc(100%-0px)] items-center pb-[24px]"
            >
              <div className="flex w-full justify-between">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex w-fit shrink-0 flex-col items-center gap-[3.56px]"
                  >
                    <img
                      src={CategoryImg}
                      alt=""
                      className="size-[48px] rounded-full border-[0.75px] border-gray1 bg-white object-cover"
                    />
                    <div className="text-2xs font-normal text-gray8">
                      Áo khoác
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
