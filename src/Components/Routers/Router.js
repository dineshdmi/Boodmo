import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Home from '../Pages/Home'
import { CartProvider } from '..//Pages/CartContext'; 
import Cart from '../Pages/Cart'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../app.css';
import Footer from '../Footer/Footer';
import Dial from '../Pages/Contact';
import LoginSignup from '../Pages/Login';
import About from '../Pages/About';
import Product from '../Pages/Product';
import ReturnPolicy from '../Policy/Return_Policy';
import PrivacyPolicy from '../Policy/Privacy_Policy';
import TermsOfUse from '../Policy/Terms_of_Use';
import Disclaimer from '../Policy/Disclaimer';
import BuyersPolicy from '../Policy/Buyers_Policy';
import SellersPolicy from '../Policy/Sellers_Policy';
import AntiCorruptionPolicy from '../Policy/Anti_corruption_Policy';
import AddressPage from '../Pages/Address';
import PaymentPage from '../Pages/Payment';


const App = () => {
    return (
        <CartProvider>
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
                        <Route path="/Home" element={<Home />}/>
                        <Route path="/login" element={<LoginSignup />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/address" element={<AddressPage />} />
                        <Route path='/payment' element={<PaymentPage/>}/>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </CartProvider>
    );
};

export default App;
