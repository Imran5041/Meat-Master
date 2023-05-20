import React from 'react'
import Navigator from '../../Utils/Global/NavigationHistory';
import {BsFillStarFill,BsStar } from "react-icons/bs";
import "./ProductCard2.scss";
const ProductCard2 = () => {
  return (
    <div className='Product2__ptr'
onClick={() =>{
  Navigator.push("/view-product/1");
}}
>
    <div className="Product2__main">
  <div className="Product2__imageBox">
    <img src='/Images/fresh5.png' alt='fresh' />
  </div>
  <div className="Product2__contentBox">
      <h3>Chicken Curry cut - Small <br></br> <span>Piece</span></h3>
      <p>$125.00</p>

  </div>
  <div className="Product2__fiveStar">
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar  className='blankStar' size="1.5rem"/> <span>(4 Reviews)</span>
  </div>
  <div className="Product2__second">
  <div className="Product2__btn">
    <button>QUICK VIEW</button>
  </div>
  </div>
 </div>
    </div>
  )
}

export default ProductCard2;