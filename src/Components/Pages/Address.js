// AddressPage.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CSS/Address.css'

const AddressPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { products } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        address: '',
        pincode: '',
        city: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const proceedToPayment = () => {
        sessionStorage.setItem('totalAmount', calculateTotalAmount(products));
        navigate('/payment', { state: { products } });
    };

    const calculateTotalAmount = (products) => {
        return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setFormData({
            firstName: '',
            lastName: '',
            contactNumber: '',
            address: '',
            pincode: '',
            city: '',
        });

        proceedToPayment();
    };


    return (
        <div className="address-container">
            <h2 className="address-title">Address Details</h2>
            <form className="address-form" onSubmit={handleSubmit}>
                <label className="address-form-label">
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="address-form-input"
                        required
                    />
                </label>    
                <label className="address-form-label">
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="address-form-input"
                        required
                    />
                </label>
                <label className="address-form-label">
                    Contact Number:
                    <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="address-form-input"
                        required
                    />
                </label>
                <label className="address-form-label">
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="address-form-input"
                        required
                    ></textarea>
                </label>
                <label className="address-form-label">
                    Pincode:
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="address-form-input"
                        required
                    />
                </label>
                <label className="address-form-label">
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="address-form-input"
                        required
                    />
                </label>
                <Link to={'/payment'}>
                    <button type="submit" onClick={proceedToPayment} className="address-form-button">Submit</button>
                </Link>
            </form>
        </div>
    );
};

export default AddressPage;
