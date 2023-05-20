import React from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import { Footer, Header } from "../../Containers";
import Item from "../../Containers/BlogPage/Item";
import { FaGreaterThan } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Blog = () => {
  return (
    <div className="Blog">
      <Header />
      <div className="Blog__back">
        <img src="/Images/veg4.png" alt="veg" className="pic" />
        <div className="Blog__title">
          <h2>LoremLipsum </h2>
          <p>
            Lorem,ipsumdolorsitametconsecteturadipisicingelit.Ratione
            asperioresducimusquosquodvoluptatibusaperiamipsaatAccusamus
            nobisaliquidharumearum,consequaturfugaimpedit.
          </p>
          <div className="Blog__social">
        
            <div className="Blog__icon">

          <BsFacebook />
            </div>
            <div className="Blog__icon2">

          <BsInstagram />
            </div>
            <div className="Blog__icon3">

          <AiOutlineLinkedin />
            </div>
          </div>
        </div>
        <div className="Blog__btn">
        <Link to="/detail"><button>Continue Reading</button></Link>
        </div>
        
        <div className="Blog__item">
          <Link to="/">
            <h4>Home</h4>
            <FaGreaterThan className="arrow" />
          </Link>
         <Link to="/detail"><h3>Blog</h3></Link>
          <Item />
        </div>
      </div>
      <div className="Blog__meat">
      <div className="Blog__back">
        <img src="/Images/veg3.png" alt="veg" className="pic" />
        <div className="Blog__title">
          <h2>LoremLipsum </h2>
          <p>
            Lorem,ipsumdolorsitametconsecteturadipisicingelit.Ratione
            asperioresducimusquosquodvoluptatibusaperiamipsaatAccusamus
            nobisaliquidharumearum,consequaturfugaimpedit.
          </p>
          <div className="Blog__social">
        
            <div className="Blog__icon">

          <BsFacebook />
            </div>
            <div className="Blog__icon2">

          <BsInstagram />
            </div>
            <div className="Blog__icon3">

          <AiOutlineLinkedin />
            </div>
          </div>
        </div>
        <div className="Blog__btn">
        <Link to="/detail"><button>Continue Reading</button></Link>
        </div>
        </div>
        <div className="Blog__meat2">
        <div className="Blog__back">
        <img src="/Images/veg2.png" alt="veg" className="pic" />
        <div className="Blog__title">
          <h2>LoremLipsum </h2>
          <p>
            Lorem,ipsumdolorsitametconsecteturadipisicingelit.Ratione
            asperioresducimusquosquodvoluptatibusaperiamipsaatAccusamus
            nobisaliquidharumearum,consequaturfugaimpedit.
          </p>
          <div className="Blog__social">
        
            <div className="Blog__icon">

          <BsFacebook />
            </div>
            <div className="Blog__icon2">

          <BsInstagram />
            </div>
            <div className="Blog__icon3">

          <AiOutlineLinkedin />
            </div>
          </div>
        </div>
        <div className="Blog__btn">
        <Link to="/detail"><button>Continue Reading</button></Link>
        </div>
        </div>
        </div>
        <div className="Blog__meat3">
        <div className="Blog__back">
        <img src="/Images/veg.png" alt="veg" className="pic" />
        <div className="Blog__title">
          <h2>LoremLipsum </h2>
          <p>
            Lorem,ipsumdolorsitametconsecteturadipisicingelit.Ratione
            asperioresducimusquosquodvoluptatibusaperiamipsaatAccusamus
            nobisaliquidharumearum,consequaturfugaimpedit.
          </p>
          <div className="Blog__social">
        
            <div className="Blog__icon">

          <BsFacebook />
            </div>
            <div className="Blog__icon2">

          <BsInstagram />
            </div>
            <div className="Blog__icon3">

          <AiOutlineLinkedin />
            </div>
          </div>
        </div>
        <div className="Blog__btn">
        <Link to="/detail"><button>Continue Reading</button></Link>
        </div>
        </div>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Blog;
