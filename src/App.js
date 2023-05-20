import React from 'react';
import "./App.scss";
import About from './Pages/About/About';
import HomePage from './Pages/HomePage/HomePage'; 
import "swiper/css";
import "swiper/css/pagination";
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import Categerious from './Pages/Categories/Categerious';
import Today from './Pages/Today\'Deal/Today';
import Break from './Pages/Breakfast/Break';
import Blog from './Pages/Blog/Blog';
import Detail from './Pages/DetailPage/Detail';





function App () {
  return (
    <div className='App'>
    <Routes>
      <Route exact path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/categories' element={<Categerious />}></Route>
      <Route path='/Today' element={<Today />}></Route>
      <Route path='/fast' element={<Break />}></Route>
      <Route path='/blog' element={<Blog />}></Route>
      <Route path='/detail' element={<Detail />}></Route>
    </Routes>

    

    

   
    
      
      
  
      

    </div>

   
  
  

   
   
  

   
      
    
  );
}

export default App;
