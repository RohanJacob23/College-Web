"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      navigation={true}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center w-full h-full bg-slate-500">
            <picture>
              <img
                src="https://picsum.photos/200/300"
                alt="Landscape picture"
                width={300}
                height={300}
                className="object-contain"
              />
            </picture>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
