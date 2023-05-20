import React from 'react'
import "./OurBlog.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ImAppleinc } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const OurBlog = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const data=[
    {
      id: 1,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card1.png",
    },
    {
      id: 2,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card2.png",
    },   {
      id: 3,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card3.png",
    },
    {
      id: 4,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card4.png",
    },
    {
      id: 5,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card2.png",
    },
    {
      id: 6,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card1.png",
    },
    {
      id: 7,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card3.png",
    },
    {
      id: 8,
      title: "BACKPACK",
      category: "Beautiful Sunday Morning",
      comment: "BY: WINBGPAYO | 2 Comments",
      pic: "/Images/card2.png",
    },
  ]
  return (
    <div className='OurBlog'>
       <Link to="/blog"><h2>OUR BLOG</h2></Link>
     
  
      <Slider{...settings}>

      {data.map((item)=>(

      <div className="OurBlog__card">
        <div className="OurBlog__cardTop">
          <img src={item.pic} alt={item.title} />
          <h1>{item.title}</h1>
        </div>
        <div className="OurBlog__cardBottom">
       <h3>{item.category}</h3>
       <p>{item.comment}</p>
        </div>
      </div>
      ))}
      </Slider>

      <div className="OurBlog__blackRectangle">
<div className="OurBlog__mobile">
  <Link to="/contact">
  <img src='/Images/mobile (2).png' alt='mobile' height="350px" />


  <img src='/Images/mobile (2).png' alt='mobile' height="350px" className='phone' /> 
  </Link>
</div>
<div className="OurBlog__join">
  <h1>Join Our Best Team For world <br></br> get connected to real - fast</h1>
  <p>Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit. Culpa, quis.</p>
  <button><ImAppleinc  size="1.5rem"/> App Store</button>
  <button><FcGoogle  size="1.5rem"/>Google</button>
</div>
<div className='OurBlog__line' > 
<img src='/Images/fish.png' alt='line'  />

</div>
      </div>

    </div>
  )
}

export default OurBlog