import React from 'react'
import { BannerCarousel, CircleCarousel, Header } from '../../Containers'
import "./HomePage.scss";

import FeatureProduct from '../../Containers/FeatureProduct/FeatureProduct';

import TodayDeal from '../../Containers/TodayDeal/TodayDeal';
import Breakfast from '../../Containers/Breakfast/Breakfast';
import OurBlog from '../../Containers/OurBlog/OurBlog';
import Footer from '../../Containers/Footer/Footer';
import Categories from '../../Containers/CategoriesItem/Categories';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className='Homepage'>
      <Header />
      <BannerCarousel />
      <div className="HomePage__title">
      <Link className="cat" to="/categories">CATEGORIES</Link>
      </div>
      <div className="HomePage__icon">
      <img src='/Images/damru.png' alt='damru' />
      </div>
      <Categories />
      <div className="HomePage__background">
      <img src='/Images/full background.png' alt='back' />
      </div>
      <div className="HomePage__title2">
        <h1>FEATURE PRODUCT</h1>
      </div>
      <div className="HomePage__icon2">
      <img src='/Images/damru.png' alt='damru' />
      </div>
      <FeatureProduct />
          <div className="HomePage__background2">
         <img src='/Images/redhalf.png' alt='back'  />
        </div>
        <div className="HomePage__txt">
          <h2>Your best Friend Just for You</h2>
          <h4>Our Certifitate style to knowledge jus one Minute</h4>
      

         <Link to="/about"> <button className='btn'>LEARN MORE</button></Link>
        
        </div> 
        <TodayDeal />
        <Breakfast />
        <OurBlog />
        <Footer />
  
      
   
    </div>
  )
}

export default HomePage