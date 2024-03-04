import React from 'react';
import company from '../Assets/logo.png'
import info1 from '../Assets/info1.jpg';
import info2 from '../Assets/info2.jpg';
import info3 from '../Assets/info3.jpg';
import play from '../Assets/playstore.jpg';
import apple from '../Assets/apple.jpg';

import './CSS/About.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <a href="/home">
          <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />
        </a>

        <div className="about-us-container">
          <h1>About Us</h1>
          <p>
            Our journey started with an idea, an idea to do something prosperous, and that idea gave birth to boodmo.
            Originating from Ukrainian, boodmo best translates to let us be. Operationally, brand boodmo exists in the
            world of car spare parts. Here, it is a call for prosperity of buyers, sellers, makers, and brands- the
            collective well being.
          </p>
          <p>
            When we came into existence in 2015, our team had a very clear aim of becoming India's largest online
            marketplace for car spare parts, and today, after almost 6 years of immense hard work, countless hours of
            dedicated efforts, and over 1.5 million active users a month, we can proudly say that we are country's
            largest online marketplace for car spare parts and the first choice for anyone looking to buy car spare
            parts online. But we still have a long way to go and believe us when we say, WE HAVE NO PLANS TO STOP!
          </p>
          <img src={info1} alt='' style={{ width: '100%' }} />
        </div>
        <div className="what-we-offer-container">
          <h2>What We Offer</h2>
          <p>
            With an enormous database of 13 million unique car spare parts, our customers get the freedom to order spare
            parts for their vehicle with just a few clicks and get them delivered to their doorstep. That's not all, here
            is more that we offer to ensure 100% customer satisfaction:
          </p>
          <ul>
            <li>High-quality OEM and aftermarket spare parts of over 3000 national and international brands</li>
            <li>Free access to part catalogues of all major OEM brands</li>
            <li>Regular discounts and free delivery offers every week</li>
            <li>Customer-friendly return policy</li>
            <li>Dedicated support team to help you find the exact compatible parts for your cars</li>
          </ul>
          <img src={info2} alt='' style={{ width: '100%' }} />
        </div>
        <div className="our-vision-container">
          <h1>Our Vision</h1>
          <p>
            Our mission is to transform India's car spare parts industry to make it more transparent and dynamic for
            customers, sellers, and brands. We aim to change the way you think about the automobile service industry by
            providing a platform to cater to your spare part needs with just a few clicks.
          </p>
          <img src={info3} alt='' style={{ width: '100%' }} />
        </div>
        <div className="indian-company-banner">
          <p>We are an</p><h5> “Indian Company Operating for Indian Customers Only”</h5>
        </div>
        <div className="download-app-container">
          <h2>Download Our Mobile App</h2>
          <p>
            And get the full boodmo experience on the go
          </p>
          <div className="app-download-buttons">
            <img src={play} className="app-store-button" />
            <img src={apple} className="app-store-button" />
          </div>
        </div>

        
      </div>
    );
  }
}

export default About;
