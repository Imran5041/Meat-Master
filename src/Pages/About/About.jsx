import React from 'react'
import "./About.scss";
import { Footer, Header } from '../../Containers';
import Data from '../../Components/About/Data';
import Review from '../../Containers/Review/Review';
const About = () => {
  return (
    <div className='About'>
        <Header />
        <Data />
        <Review />
        <Footer />
    

    </div>
  )
}

export default About