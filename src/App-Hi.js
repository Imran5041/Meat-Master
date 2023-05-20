import React from 'react';

import "./App.scss";
import Header from './Containers/Header/Header';
import BannerCarousel from './Containers/BannerCarousel/BannerCarousel';
import ProductCircle from './Components/ProductCircle/ProductCircle';
// import ProductCard from './Components/ProductCard/ProductCard';
// import ProductCard2 from './Components/ProductCard2/ProductCard2';
// import ProductCard3 from './Components/ProductCard3/ProductCard3';
function App () {
  return (
    <>

   
    {/* <ProductCard />
    <ProductCard2 />
   <ProductCard3 /> */}
   <Header />
   <BannerCarousel />
   <ProductCircle />

   
      
    </>
  );
}

export default App;
