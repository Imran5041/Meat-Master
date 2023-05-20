import React from 'react'
import "./BannerCarousel.scss";
import Carousel from 'react-elastic-carousel';

const breakPoints=[
  {width:1, itemtToShow:1},
  {width:550, itemtToShow:2},
  {width:768, itemtToShow:3},
  {width:1200, itemtToShow:4},
  
  ];
const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='BannerCarousel'>
          <Carousel breakPoints={breakPoints}>
       <div className="BannerCarousel__back">
        <div className="BannerCarousel__container">
            <img src='/Images/Backgroundhalf.png' alt='back' />
      <div className="BannerCarousel__fresh">

                <h1>Freshest Meat Just  For You</h1>
                
                <p>Small Piece of Bones in and boneless <br></br> Chicken for curry's</p>
                 <button>BUY NOW</button>
                </div>
                
            
            
            
        </div>
        </div>
        
        <div className="BannerCarousel__container">
            

            <img src='/Images/Backgroundhalf.png' alt='back' />
            
          
            
            <div className="BannerCarousel__fresh">
                <h1>Freshest  Meat Just For You</h1>
                <p>Small Piece of Bones in and boneless <br></br> Chicken for curry's</p>
                <button>BUY NOW</button>
                
            </div>
            
            
        </div>
      </Carousel>
        <div className="BannerCarousel__leg">
            <img src='/Images/Rectangle 49.png' alt='rec' />
            </div>
        
          <div className="BannerCarousel__chicken1">
          <img src='/Images/vector (2).png' alt='vec' />
          <p className='text'>24/7 support</p>
    </div>
    <div className="BannerCarousel__chicken2">
          <img src='/Images/vector (3).png' alt='vec' />
       
          <p>30 Days Delivery</p>
        </div>
        <div className="BannerCarousel__chicken3">
          
  
    
          <img src='/Images/vector4.png' alt='vec' />
          <p className='text'>Payments Delivery</p>
    </div>
    <div className="BannerCarousel__chicken4">
          <img src='/Images/vector1.png' alt='vec' />
          <p className='text'>Fast Delivery</p>
        </div>
        </div>
  
  )
}

export default BannerCarousel