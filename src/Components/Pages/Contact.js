// ContactPage.js

import React from 'react';
import company from '../Assets/logo.png'

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './CSS/Contact.css';

const ContactPage = () => {
  return (
    <>
      <a href="/home">
        <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />
      </a>

      <div className="card">
        <h2>For Assistance</h2>
        <p>
          Please reach out to our customer support team, available every day from 10:00 AM to 7:00 PM. You can contact us through the Help & Support Form on our website and application.
        </p>

        <p>
          You can also use our IVR number: <strong>+91 114 1189222</strong>.
        </p>

        <div className="warning">
          <strong>!WARNING!</strong> Do not call any other number except mentioned above. Please note, boodmo never calls & asks for bank account details, UPI id, OTP, etc. from the customer. We urge you not to share such information with anyone. In case of any fraudulent transaction, immediately notify your bank.
        </div>

        <h3>Our Head Office Address</h3>
        <p>
          Smart Parts Online Pvt. Ltd.<br />
          AIHP Palms (Plot No. 242 & 243), Ground floor, Udyog Vihar Phase IV, Gurugram, Haryana-122015, India.
        </p>
      </div>
      <div className="container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='Enter Name' required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='Enter Email' required />

            <label htmlFor="questionType">Question:</label>
            <input type="text" id="questionType" name="questionType" placeholder='Enter Question' required />

            <label htmlFor="comment">Message:</label>
            <textarea id="comment" name="comment" placeholder='Enter Message' required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Help & Support</h2>
          <p>For any inquiries or assistance, please contact us:</p>

          <ul>
            <li><FaEnvelope /> your.email@example.com</li>
            <li><FaPhone /> +91 114 1189222</li>
            <li><FaMapMarkerAlt /> AIHP Palms (Plot No. 242 & 243), Ground floor, Udyog Vihar Phase IV, Gurugram, Haryana-122015, India.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
