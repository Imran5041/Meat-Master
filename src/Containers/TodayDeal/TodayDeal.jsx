import React from 'react';
import "./TodayDeal.scss";

import ProductCard from '../../Components/ProductCard/ProductCard';
import ProductCard2 from "../../Components/ProductCard2/ProductCard2"
import ProductCard4 from '../../Components/ProductCard4/ProductCard4';
import ProductCard5 from '../../Components/ProductCard5/ProductCard5';
import ProductCard6 from '../../Components/ProductCard6/ProductCard6';
import { Link } from 'react-router-dom';
const TodayDeal = () => {
  return (
    <div className='TodayDeal'>
      
       <Link to="/today"><h2>TODAY' DEAL</h2></Link>
        <div className="TodayDeal__icons">
        <img src='/Images/damru.png' alt='damru' />
        </div>
        <div className="TodayDeal__subCard">

        <div className="TodayDeal__card">
        <ProductCard />
        <ProductCard2 />
        <ProductCard4 />
        <ProductCard5 />
        <ProductCard6 />
        </div>
        </div>
  <div className="TodayDeal__rectangle">
    
    <div className="TodayDeal__pic">
      <img src='/Images/red rectangle.png' alt='rec' />
      <h2>DOLOR LISUM GET FULL ONE YEAR</h2>
      <p>SIR AMET CONSFSSJK</p>
      <button>Shop Now</button>
      
    </div>
    <div className="TodayDeal__dabba1">
        <img src='/Images/Mask group.png' alt='dabba' />
      </div>
    <div className="TodayDeal__logo">
      <img src='/Images/meatmaster.png' />
      
    </div>
 <div className="TodayDeal__hen">
    <img src='/Images/hen.png' alt='hen' />
    </div>
  </div>
   <div className="TodayDeal__title">
   
   </div>
     
    </div>
  )
}

export default TodayDeal