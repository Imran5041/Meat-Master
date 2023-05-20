import React from "react";
import "./Foot.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiFillYoutube,AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Foot = () => {
  return (
    <div className="Foot">
      <div className="Foot__box">
        <img src="/Images/red rectangle.png" alt="red" />
      </div>
      <div className="Foot__mickeymouse">
        <img src="/Images/cartoon2.png" alt="mouse" />
      </div>
      <div className="Foot__gmail">
        <img src="/Images/gamil.png" alt="gmail" />
      </div>
      <div className="Foot__heading">
        <h2>
          Join Now and get 105 off <br></br> knowledge for some{" "}
        </h2>
        <p>
          Mbvcuwe ugjbou hf3irv jcwkebv pkeroipgv jvbrvi <br></br>Nkoidw vwucg
          vdcho vowcvprivu jbni
        </p>
      </div>
      <div className="Foot__btn">
        <button>Write your Email </button>
      </div>
      <div className="Foot__btn2">
        <button>Join <FaTelegramPlane /></button>
      </div>
      <div className='Foot__footer'>
        <div className="Foot__logo">
            <img src='/Images/footlogo.png' alt='logo' />
        </div>
        <div className="Foot__got">
            <h1>Got Question ? Call us 24/7</h1>
            <div className="Foot__music">
            <BsMusicNoteBeamed  size="2rem" className='icon'/>

            <p>(1800) 246892156
                <br></br>
                (1800)352456122
            </p>
        
            
            
            </div>
 <div className="Foot__map">
    <GoLocation size="2rem"  className='icon'/>
    <p>Lorem ipsum dolor sit amet<br></br>typeting</p>
 </div>
 <div className="Foot__subsocial">
 <div className="Foot__social">
    <FaFacebookF  size="2rem" className='facebook'/>
    </div>
    <div className="Foot__social">
    <FiInstagram size="2rem" className='facebook' />
    </div>
    <div className="Foot__social">
    <ImTwitter  size="2rem" className='facebook'/>
    </div>
    <div className="Foot__social">
    <AiFillLinkedin size="2rem" className='facebook' />
    </div>
    <div className="Foot__social">
    <AiFillYoutube size="2rem" className='facebook' />
     </div>
     </div>
     
                
        </div>
        <div className="Foot__find">
            <h1>Find it Fast</h1>
            <p>Chicken Egg<br></br>food Biryani <br></br> cold cuts <br></br>mutton Fast<br></br>food Biryani</p>
        </div>
        <div className="Foot__about">
          <Link className="Home" to="/">Home</Link><br></br>
            <Link className="about" to="/about">about us</Link><br></br>
            <Link className="contact" to="/contact">Contact</Link><br></br>
            <Link className="Whishlist" to="/whishlist">Whishlist</Link><br></br>
            <Link className="FaQ" to="/FaQ">FaQ</Link><br></br>
            <Link className="compare" to="/compare">Compare</Link>
        </div>
        <div className="Foot__customer">
            <h1>Customer Care</h1>
            <p>Track your Order<br></br>food Biryani <br></br> cold cuts <br></br>mutton Fast<br></br>Address</p>
        </div>

    </div>
    
    </div>
  );
};

export default Foot;
