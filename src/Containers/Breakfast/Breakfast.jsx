import React from 'react';
import "./Breakfast.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { ProductCard3, ProductCard4 } from '../../Components';
import Dabba from '../../Components/Dabba/Dabba';
import { Link } from 'react-router-dom';
const Breakfast = () => {
  return (
    <div className="Breakfast">
       <Link to="/fast"> <h1>BREAKFAST SPECIALS</h1></Link>
        <div className="Breakfast__icon">
        <img src='/Images/damru.png' alt='damru' />
        </div>
        <div className="Breakfast__cards">
       <ProductCard3 />
       <Dabba />
       <ProductCard3 />
       <ProductCard3 />
       <ProductCard3 />
        </div>
    </div>
  )
}


export default Breakfast