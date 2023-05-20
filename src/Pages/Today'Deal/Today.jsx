import React from 'react'
import { Footer, Header, TodayDeal } from '../../Containers'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa';
import "./Today.scss";
const Today = () => {
  return (
    <div className='Today' >
        <Header />
        <Link to="/"><h4>Home</h4><FaGreaterThan  className='arrow'/></Link>
        <h3>Today Deal</h3>
        <div className="Today__background">
            <img src='/Images/today.png' alt='today' />
            <h2>Today 's Deals</h2>
        </div>
        <TodayDeal />
        <Footer />
    </div>
  )
}

export default Today