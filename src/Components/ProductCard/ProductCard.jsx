import React from 'react'
import Navigator from '../../Utils/Global/NavigationHistory';
import {BsFillStarFill,BsStar } from "react-icons/bs";
import "./ProductCard.scss";
const ProductCard = () => {
  return (
    <div className='Product__ptr'
onClick={() =>{
  Navigator.push("/view-product/1");
}}
>
  
  <div className="Product__imageBox">
    <img src='/Images/fresh.png' alt='fresh' />
  </div>
  <div className="Product__title">
      <h3>Chicken Curry Cut - Small<br></br><span>Piece</span></h3>
      <p>$125.00</p>

  </div>
  <div className="Product__fiveStar">
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar  className='blankStar1' size="1.5rem"/> <span>(4 Reviews)</span>
  </div>
  <div className="Product__btn">
    <button>QUICK VIEW</button>
  </div>
 
    </div>
  )
}

export default ProductCard;