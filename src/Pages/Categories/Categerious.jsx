import React from 'react'
import { BannerCarousel, Categories, Header } from '../../Containers'

const Categerious = () => {
  return (
    <div className="Categerious">
        <Header />
        <BannerCarousel />
        <Categories />
        <div className="HomePage__background">
      <img src='/Images/full background.png' alt='back' />
      </div>

    </div>
  )
}

export default Categerious