import React, { useState, useEffect } from 'react';
import './app.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/navbar';
import Dial from './Components/Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/Pages/Login';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import ReturnPolicy from './Components/Policy/Return_Policy';
import PrivacyPolicy from './Components/Policy/Privacy_Policy';
import TermsOfUse from './Components/Policy/Terms_of_Use';
import Disclaimer from './Components/Policy/Disclaimer';
import BuyersPolicy from './Components/Policy/Buyers_Policy';
import SellersPolicy from './Components/Policy/Sellers_Policy';
import AntiCorruptionPolicy from './Components/Policy/Anti_corruption_Policy';
import Cart from './Components/Pages/Cart';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
 

  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Dial />} />
          <Route path="/product" element={<Product />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/buyers-policy" element={<BuyersPolicy />} />
          <Route path="/sellers-policy" element={<SellersPolicy />} />
          <Route path="/anti-corruption-policy" element={<AntiCorruptionPolicy />} />
          <Route
            path="/Home"
            element={<Home/>}
          />
          <Route path="/login" element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
