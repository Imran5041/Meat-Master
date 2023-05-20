import React from 'react'
import Navigator from '../../Utils/Global/NavigationHistory';
import {BsFillStarFill,BsStar } from "react-icons/bs";
import "./ProductCard3.scss";
const ProductCard3 = () => {
  return (
    <div className='Product3__ptr'
onClick={() =>{
  Navigator.push("/view-product/1");
}}
>
  <div className="Product3__imageBox">
    <img src='/Images/singal dabba.png' alt='fresh' />
  </div>
  <div className="Product3__contenBox">
      <h3>Chicken Curry cut - Small<br></br><span>Piece</span> </h3>
      <p>$125.00</p>

  </div>
  <div className="Product3__fiveStar">
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar  className='blankStarss' size="1.5rem"/> <span>(4 Reviews)</span>
  </div>
  <div className="Product3__btn">
    <button>QUICK VIEW</button>
  </div>
 
    </div>
  )
}

export default ProductCard3;