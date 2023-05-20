import React from 'react'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa';
import { Breakfast, Footer, Header } from '../../Containers'
import "./Break.scss";

const Break = () => {
  return (
    <div className='Break'>
        <Header />
        <Link to="/"><h4>Home</h4><FaGreaterThan  className='arrow'/></Link>
        <h3>Today Deal</h3>
        <div className="Today__background">
            <img src='/Images/today.png' alt='today' />
            <h2>Breakfast Deal</h2>
        </div>
        <Breakfast />
        <Footer />
    </div>
  )
}

export default Break