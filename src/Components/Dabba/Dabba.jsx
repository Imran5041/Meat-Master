import React from 'react'
import Navigator from '../../Utils/Global/NavigationHistory';
import {BsFillStarFill,BsStar } from "react-icons/bs";
import "./Dabba.scss";
const Dabba = () => {
  return (
    <div className='Dabba__ptr'
onClick={() =>{
  Navigator.push("/view-product/1");
}}
>
    <div className="Dabba__main">
  <div className="Dabba__imageBox">
    <img src='/Images/bottle.png' alt='fresh' />
  </div>
  <div className="Dabba__contentBox">
      <h3>Chicken Curry cut - Small <br></br> <span>Piece</span></h3>
      <p>$125.00</p>

  </div>
  <div className="Dabba__fiveStar">
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar  className='blankStar' size="1.5rem"/> <span>(4 Reviews)</span>
  </div>
  <div className="Dabba__btn">
    <button>QUICK VIEW</button>
  </div>
 </div>
    </div>
  )
}

export default Dabba;