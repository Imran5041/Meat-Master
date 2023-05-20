import React from 'react';
import "./Categories.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./Categories.scss";


import { Pagination } from "swiper";
import { ProductCircle2, ProductCircle4, ProductCircle5, ProductCircle6 } from '../../Components';
import ProductCircle3 from '../../Components/ProductCircle/ProductCircle3/ProductCircle3';
import ProductCircle from '../../Components/ProductCircle/ProductCircle';

const Categories = () => {
  return (
    <>
     <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ProductCircle /></SwiperSlide>
        <SwiperSlide><ProductCircle2 /></SwiperSlide>
        <SwiperSlide><ProductCircle3 /></SwiperSlide>
        <SwiperSlide><ProductCircle4 /></SwiperSlide>
        <SwiperSlide><ProductCircle5 /></SwiperSlide>
        <SwiperSlide><ProductCircle6 /></SwiperSlide>
        <SwiperSlide><ProductCircle5 /></SwiperSlide>
        <SwiperSlide><ProductCircle4 /></SwiperSlide>
        <SwiperSlide><ProductCircle3 /></SwiperSlide>
      </Swiper></>
    
            
  )
}

export default Categories