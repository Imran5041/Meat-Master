import React from "react";
import {BsFillStarFill,BsStar } from "react-icons/bs";
import "./Review.scss";
const Review = () => {
  return (
    <div className="Review">
      <div className="Review__heading">
        <h4>Customer Review</h4>
        <h1>Clients Are Saying... </h1>
      </div>
      <div className="Review__customer">
      <div className="Review__card">
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br></br>
          consectetur odit aliquid, deserunt molestias obcaecati. Aliquid quas,<br></br>
          exercitationem nobis magnam quia illo fugiat? Unde mollitia illum<br></br>
          labore nostrum dolore nesciunt!
        </p>
        <div className="Review__rating">
        <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar className='blankStar1' size="1.5rem"/>
    <div className="Review__picture">
        <img src="/Images/rating img.png" alt="rat" />
        <h2>Jones James</h2>
    </div>
        </div>
      </div>
      <div className="Review__card2">
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br></br>
          consectetur odit aliquid, deserunt molestias obcaecati. Aliquid quas,<br></br>
          exercitationem nobis magnam quia illo fugiat? Unde mollitia illum<br></br>
          labore nostrum dolore nesciunt!
        </p>
        <div className="Review__rating">
        <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar className='blankStar1' size="1.5rem"/>
    <div className="Review__picture">
        <img src="/Images/rating img2.png" alt="rat" />
        <h2>Jones James</h2>
    </div>
        </div>
      </div>
      <div className="Review__card3">
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br></br>
          consectetur odit aliquid, deserunt molestias obcaecati. Aliquid quas,<br></br>
          exercitationem nobis magnam quia illo fugiat? Unde mollitia illum<br></br>
          labore nostrum dolore nesciunt!
        </p>
        <div className="Review__rating">
        <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill size="1.5rem" />
    <BsFillStarFill  size="1.5rem"/>
    <BsFillStarFill  size="1.5rem"/>
    <BsStar className='blankStar1' size="1.5rem"/>
    <div className="Review__picture">
        <img src="/Images/rating img3.png" alt="rat" />
        <h2>Jones James</h2>
    </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Review;
