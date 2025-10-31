import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductImg from "../../static/images/product.jpg";

export const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        className="h-full"
        pagination={true}
        modules={[Pagination]}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="!flex !w-[calc(100%-0px)] items-center"
          >
            <div className="flex h-[375px] w-full gap-[32px]">
              <img
                key={index}
                src={ProductImg}
                alt=""
                className="size-full object-cover object-top"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
