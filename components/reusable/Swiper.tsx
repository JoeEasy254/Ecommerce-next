"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function swiper() {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mx-14 mt-4 ">
      <SwiperSlide className="rounded">
        <img
          src="https://cdn11.bigcommerce.com/s-7a906/images/stencil/1920w/carousel/271/calirosa__16690.jpg?c=2"
          alt="image"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded">
        <img
          src="https://cdn11.bigcommerce.com/s-7a906/images/stencil/1920w/carousel/271/calirosa__16690.jpg?c=2"
          alt="image"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded">
        <img
          src="https://cdn11.bigcommerce.com/s-7a906/images/stencil/1920w/carousel/271/calirosa__16690.jpg?c=2"
          alt="image"
        />
      </SwiperSlide>
    </Swiper>
  );
}
