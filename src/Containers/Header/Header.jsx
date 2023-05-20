import React from 'react';
import "./Header.scss";
import Navigator from '../../Utils/Global/NavigationHistory';
import { MdLocationOn } from "react-icons/md";
import {AiOutlineMenu } from "react-icons/ai";
import {VscAccount} from "react-icons/vsc";
import {BsHeart} from "react-icons/bs";
import {BiRectangle} from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='Header'>
      <div className="Header__logo">
        <Link to="/">
        <img src='/Images/logo.png' alt='logo' 
        onClick={() => {
          Navigator.push("/imran")
          }}
          />
          </Link>
      </div>
      <div className="Header__location">
       <MdLocationOn  size="2rem"/>
       </div>
       <div className="Header__dropDown">
      
       <Dropdown>
      <Dropdown.Toggle variant='white' id="dropdown-basic">
      NEW DELHI<br></br><span>Adarsh vihar..</span> 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Faridabad</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Delhi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      <div className="Header__menu">

<AiOutlineMenu size="3rem"/>
</div>
<div className="Header__search">
            <input type="text" placeholder='Find Best Offer For You' />
        </div>
        <div className="Header__btn" >
          <button >SEARCH</button>
        </div>
        <div className="Header__accountContainer">
          <span >
            <VscAccount size="2rem" className='icons' />
         <p> Login <br /> Account</p>
          </span> 
          </div>
          <div className="Header__accountContainer">
          <span >
            <BsHeart size="2rem" className='icons'/>
        <p>Favourite <br /> MyWishlist</p>
          </span>
       </div>
       <div className="Header__accountContainer">
       <span >

        <BiRectangle size="2rem" className='icons' />
        <p> Your Cart<br></br>$:125.00 </p>
       </span>
        </div>
    </div>
  )
}

export default Header