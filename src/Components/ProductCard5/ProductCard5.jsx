import React from 'react'
import Navigator from '../../Utils/Global/NavigationHistory';
import {BsFillStarFill,BsStar } from "react-icons/bs";
import "./ProductCard5.scss";
const ProductCard5 = () => {
  return (
    <div className='ProductCard5__ptr'
onClick={() =>{
  Navigator.push("/view-product/1");
}}
>
    <div className="ProductCard5__card">

   
  <div className="ProductCard5__imageBox">
    <img src='/Images/fresh3.png' alt='fresh' />
  </div>
  <div className="ProductCard5__title">
      <h3>Chicken Curry Cut Small - <br></br><span>Piece</span></h3>
      <p>$125.00</p>

  </div>
  <div className="ProductCard5__fiveStar">
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar  className='blankStar1' size="1.5rem"/><span>( 4Review )</span>
  </div>
  <div className="ProductCard5__btn">
    <button>QUICK VIEW</button>
  </div>
  </div>
    </div>
  )
}

export default ProductCard5;