import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Promobanner from "../../static/images/promo-banner.jpg";

export const PromoBanner = () => {
  return (
    <Swiper
      spaceBetween={16}
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
          <img
            src={Promobanner}
            alt=""
            className="h-[120px] w-full rounded-[12px] object-cover"
            style={{
              boxShadow: "0px 2px 4px 0px #0000000A, 0px 1px 1px 0px #00000005",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
