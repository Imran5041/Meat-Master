import React from "react";
import "./Cont.scss";
import { AiTwotonePhone,AiOutlineMail } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

const Cont = () => {
  return (
    <div className="Cont">
      <div className="Cont__heading">
        <h1>Contact</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error<br></br>
          deserunt enim, sint nam cumque esse a aliquam maxime commodi<br></br>
          cupiditate libero accusantium itaque ad perferendis?
        </h5>
        <img src="/Images/contact.png" alt="contact" />
        <div className="Cont__icon">

        <AiTwotonePhone  className="phone"/>
        <h2>Phone</h2>
        <p>+918929545041</p>
        </div>
        <div className="Cont__icon2">

        <AiOutlineMail className="email" />
        <h2>Email</h2>
        <p>ikhan891622@gmail.com</p>
        </div>
        <div className="Cont__icon3">
          <FiMapPin  className="map"/>
          <h2>Address</h2>
          <p>17PrincessRoad,London,GreaterLondonNW18JR,UK</p>
        </div>
      </div>
    </div>
  );
};

export default Cont;
