// LoginSignup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';
import logo from '../Assets/logo.png';
import company from '../Assets/logo.png'

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const LoginSignup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isClicked, setIsClicked] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleContinue = () => {
        const { firstName, lastName, email, password, confirmPassword } = formData;

        // Validate that required fields are filled
        if (!isLoginMode && (!firstName || !lastName)) {
            alert('Please enter your full name.');
            return;
        }

        if (!email) {
            alert('Please enter your email.');
            return;
        }

        if (!password) {
            alert('Please enter your password.');
            return;
        }

        if (!isLoginMode && password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Log the values (you can replace this with your desired action)
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);

        // Perform any other necessary actions
        setIsClicked(true);
        alert('Continue button clicked!');

        // Redirect to the home page
        navigate('/home');
    };

    const handleToggleMode = () => {
        setIsLoginMode((prevMode) => !prevMode);
    };

    return (
        <>
            <a href="/home">
                <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />
            </a>
            <div className='loginsignup'>
                <div className='loginsignup-container'>
                    {/* Left side - Form */}
                    <div className='form-section'>
                        <h1>{isLoginMode ? 'Login' : 'Sign Up'}</h1>
                        <div className='loginsignup-fields'>
                            {!isLoginMode && (
                                <>
                                    <input
                                        type='text'
                                        placeholder='First Name'
                                        name='firstName'
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type='text'
                                        placeholder='Last Name'
                                        name='lastName'
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </>
                            )}
                            <input
                                type='email'
                                placeholder='Email Address'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {!isLoginMode && (
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                        <button onClick={handleContinue}>
                            {isLoginMode ? 'Login' : 'Continue'}
                        </button>
                        {isClicked && (
                            <div className='tooltip'>
                                <p>{isLoginMode ? 'Login' : 'Continue'} button was clicked!</p>
                            </div>
                        )}
                        <p className='loginsignup-login' onClick={handleToggleMode}>
                            {isLoginMode
                                ? "Don't have an account? Sign Up here"
                                : 'Already have an account? Login here'}
                        </p>
                        <div className='loginsignup-agree'>
                            <input type='checkbox' name='' id='' />
                            <p>
                                By continuing, I agree to the terms of use & privacy policy.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Company Information */}
                    <div className='company-info'>
                        <img src={logo} alt='Company Logo' />
                        <ul>
                            <li><FaEnvelope aria-label="Email" /> your.email@example.com</li>
                            <li><FaPhone aria-label="Phone" /> +91 114 1189222</li>
                            <li><FaMapMarkerAlt aria-label="Address" /> AIHP Palms (Plot No. 242 & 243), Ground floor, Udyog Vihar Phase IV, Gurugram, Haryana-122015, India.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginSignup;
