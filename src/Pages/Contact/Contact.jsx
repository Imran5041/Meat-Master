import React from 'react';
import "./Contact.scss";
import { Footer, Header } from '../../Containers'
import Cont from '../../Containers/Contact/Cont'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='Contact'>
        <Header />
        <Link to="/"><h4>Home</h4><FaGreaterThan  className='arrow'/></Link>
        <h3>Contact</h3>
        <Cont />
        <div className="Contact__rectangle">
        <div className="Contact__message">
          <h2>Send Us a<br></br> Message</h2>
          <img src='/Images/funny pokeymon.png' alt='poky' />
        </div>
        <div className="Contact__title">
          <input type='text' placeholder='Your Name' />
        </div>
        <div className="Contact__title2">
          <input type='text' placeholder='Your Email' />
        </div>
        <div className="Contact__title3">
          <input type='text' placeholder='Write Message' />
        </div>
        <button>Send</button>
        </div>
        <Footer />
    </div>
  )
}

export default Contact