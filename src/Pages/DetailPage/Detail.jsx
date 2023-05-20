import React from 'react'
import { Footer, Header } from '../../Containers'
import "./Detail.scss";
import Item from '../../Containers/BlogPage/Item';
const Detail = () => {
  return (
    <div className='Detail'>
        <Header />
        <div className="Detail__back">
            <h2>Lorwm Lispure lotevn</h2>
            <img src='/Images/veg4.png' alt='veg' />
        </div>
        <Item />
        <Footer />
    </div>
  )
}

export default Detail