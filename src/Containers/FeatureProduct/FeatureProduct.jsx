import React from 'react';
import "./FeatureProduct.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductCard2 from "../../Components/ProductCard2/ProductCard2"
import ProductCard4 from '../../Components/ProductCard4/ProductCard4';
import ProductCard5 from '../../Components/ProductCard5/ProductCard5';
import ProductCard6 from '../../Components/ProductCard6/ProductCard6';
import { ProductCard3 } from '../../Components';
const FeatureProduct = () => {
  return (
    <div className='FeatureProduct'>
      
     
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ProductCard4 /></SwiperSlide>
        <SwiperSlide><ProductCard2/></SwiperSlide>
        <SwiperSlide><ProductCard6 /></SwiperSlide>
        <SwiperSlide><ProductCard5 /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard4 /></SwiperSlide>
      </Swiper>
        

     
      
    </div>
  )
}

export default FeatureProduct