import React from 'react'
import "./Item.scss";
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Item = () => {
  return (
    <div className='Item'>
        <div className="Item__categories">
            <h2>Categories</h2>
            <p>
            <FaGreaterThan /> Categories1<br></br>
            .......................................<br></br>
            <FaGreaterThan /> Categories2<br></br>
            .......................................<br></br>
            <FaGreaterThan /> Categories3<br></br>
            ......................................<br></br>
            <FaGreaterThan /> Categories4<br></br>
            ......................................<br></br>
            <FaGreaterThan /> Categories5 <br></br>
            ......................................  
            </p>

                  </div>
                  <div className="Item__post">
                    <h2>Recent Post</h2>
                    <img  src='/Images/veg4.png' alt='veg' />
                    <h1>May 1 2023</h1>
                    <p>It is Very Beautiful picture<br></br>
                    greaterthan long</p>
                    <img  src='/Images/veg3.png' alt='veg' />
                    <h1>May 1 2023</h1>
                    <p>It is Very Beautiful picture<br></br>
                    greaterthan long</p>
                    <img  src='/Images/veg2.png' alt='veg' />
                    <h1>May 1 2023</h1>
                    <p>It is Very Beautiful picture<br></br>
                    greaterthan long</p>
                  </div>
                  <div className="Item__archives">
                  <h2>Archives</h2>
                  <p>
        
        
            <FaGreaterThan /> May 2021<br></br>
            ......................................<br></br>
            <FaGreaterThan /> July 2011<br></br>
            ......................................<br></br>
            <FaGreaterThan /> August 2015 <br></br>
            ......................................  
            </p>
                  </div>
    </div>
  )
}

export default Item