import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { RiCarLine } from 'react-icons/ri';
import logo from '../Assets/logo.png';
import profileIcon from '../Assets/profile-icon.jpg';
import { IoCartOutline } from "react-icons/io5";

import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLogoClick = () => {
        navigate('/Home');
        setShowMenu(!showMenu); // Close the offcanvas menu when navigating
    };

    const handleProfileClick = () => {
        setShowLoginForm(!showLoginForm);
        setShowMenu(!showMenu); // Close the offcanvas menu when interacting with the profile
    };

    const handleLoginClick = () => {
        navigate('/Login');
        setShowMenu(!showMenu); // Close the offcanvas menu when navigating
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    // const handleHome = () => {
    //     setShowMenu(!showMenu);
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className={`offcanvas offcanvas-end ${showMenu ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" onClick={toggleMenu} data-bs-dismiss="offcanvas">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img src={logo} alt="Company Logo" className="company-logo" onClick={toggleMenu} data-bs-dismiss="offcanvas" />
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleMenu}></button>

                    </div>
                    <div className="offcanvas-body">
                    
                        <ul className="navbar-nav" >
                            {/* <li className="nav-item" onClick={toggleMenu} data-bs-dismiss="offcanvas">
                                <Link to="/Home" className="nav-link">Home</Link>
                            </li> */}
                            <li className="nav-item" onClick={toggleMenu} data-bs-dismiss="offcanvas">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item" onClick={toggleMenu} data-bs-dismiss="offcanvas">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                            <li className="nav-item" onClick={toggleMenu} data-bs-dismiss="offcanvas">
                                <Link to="/product" className="nav-link">Product</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    Policies
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" onClick={toggleMenu} data-bs-dismiss="offcanvas">
                                    <li><Link to="/privacy-policy" className="dropdown-item" onClick={handleLogoClick}>Privacy Policy</Link></li>
                                    <li><Link to="/return-policy" className="dropdown-item" onClick={handleLogoClick}>Return Policy</Link></li>
                                    <li><Link to="/disclaimer" className="dropdown-item" onClick={handleLogoClick}>Disclaimer</Link></li>
                                    <li><Link to="/terms-of-use" className="dropdown-item" onClick={handleLogoClick}>Terms of Use</Link></li>
                                    <li><Link to="/buyers-policy" className="dropdown-item" onClick={handleLogoClick}>Buyers Policy</Link></li>
                                    <li><Link to="/sellers-policy" className="dropdown-item" onClick={handleLogoClick}>Sellers Policy</Link></li>
                                    <li><Link to="/anti-corruption-policy" className="dropdown-item" onClick={handleLogoClick}>Anti-corruption Policy</Link></li>
                                </ul>
                                <div className='cart'>
                                    <Link to="/cart">
                                        <IoCartOutline style={{ fontSize: '30px', color: '#000' }} />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="profile-section" onClick={handleProfileClick}>
                            <img src={profileIcon} alt="Profile" className="profile-icon" />
                        </div>
                        {showLoginForm && (
                            <div className="login-form" onClick={toggleMenu} data-bs-dismiss="offcanvas">
                                {/* Your login/signup form goes here */}
                                <button onClick={handleLoginClick}>Login</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;