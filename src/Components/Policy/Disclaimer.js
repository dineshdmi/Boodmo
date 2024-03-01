// Disclaimer.js

import React from 'react';
import './CSS/Disclaimer.css'; // Import your CSS file
import company from '../Assets/logo.png';

const Disclaimer = () => {
  return (
    <>
      <a href="/home">
        <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />
      </a>

      <div className="custom-disclaimer-container">
        <div className="custom-disclaimer-content">
          <h2> Disclaimer - boodmo</h2>
          <br></br>
          <ul>
            <li className="custom-privacy-point">
              <p><strong>01.</strong>boodmo.com ("Website") is a web-portal, owned and operated by Smart Parts Online Pvt. Ltd., (“Company”) for all kinds of spare parts and does not own or control any car make or spare parts brand.</p>
            </li>
            <li className="custom-privacy-point">
              <p><strong>02.</strong>All Car Make, Marque, Model, Submodel, Modification, Variants names are respective trademarks of OEM's (“Original Equipment Manufacturer”) and boodmo.com has no relation to them.
              </p>
            </li>
            <li className="custom-privacy-point">
              <p><strong>03.</strong>All car images, logos on this site are the property of their respective owners. We do not hold any copyright in regards to these pictures . These pictures have been collected from different public sources including various websites, considered to be in public domain. If any one has any objection to display of any picture, image or text it may be brought to our notice by sending an email (contact us) and the disputed media will be be removed immediately, after verification of the claim.

              </p>
            </li>
            <li className="custom-privacy-point">
              <p><strong>04.</strong>The company neither endorses any aftermarket or replacement car parts nor claims any such part as genuine or OEM authorised. The company is the facilitator for all kind of spare parts sales and not acting on behalf of the OEM and/or supplier.
              </p>
            </li>
            <li className="custom-privacy-point">
              <p><strong>05.</strong>boodmo accepts payments from international cards but delivery can be done on territory of India only. Orders with delivery address outside of India will be cancelled and refunded withholding 5% of received amount.
              </p>
            </li>
            <li className="custom-privacy-point">
              <p><strong>06.</strong>The company is not liable for incorrect information provided by any producer or Seller or collected from other open resources or the way it was used by the Visitor or Buyer.
              </p>
            </li>
            <li className="custom-privacy-point">
              <p><strong>07.</strong>Company while eager to provide best services and implement best practices has no responsibility for third party action or behaviour (of the vendor, customs, logistics provider or customer etc.), including price change or delivery delay.
              </p>
            </li>
          </ul>

          <p>
            All car images, logos on this site are the property of their respective owners. We do not hold any copyright in regards to these pictures. These pictures have been collected from different public sources, including various websites, considered to be in the public domain. If anyone has any objection to the display of any picture, image, or text, it may be brought to our notice by sending an email (contact us), and the disputed media will be removed immediately, after verification of the claim.
          </p>

          <p>
            The company, through its Website and Application (collectively “Platform”), offers to customers goods of relevant pages randomly, sorted, or filtered by the customer’s choice. No goods are intentionally prioritized in search results; otherwise, it will be stated clearly. It is at the sole discretion of the user to decide and opt for any kind of goods.
          </p>

          {/* Add more paragraphs and list items as needed */}
        </div><hr/><br/>
        <div className="custom-recommendations-container">
          <div className="custom-recommendations-content">
            <h3>A. Custom Recommendations</h3>

            <ul>
              <li className="custom-recommendation-point">
                <p>
                  <strong>01.</strong>boodmo may recommend some aftermarket or replacement car part via automatic selection based on data given by data providers. If the spare part is wrongly recommended, please, send it back with a description of the mistake.</p>
              </li>
              <li className="custom-recommendation-point">
                <p>
                  <strong>02.</strong>Platform is not responsible for wrong identification made by Buyer and Seller is not liable to take the product sold back.</p>
              </li>
              <li className="custom-recommendation-point">
                <p>
                  <strong>03.</strong>Anybody is welcomed to contribute by sending feedback about any mistakes found: missing configuration of cars, compatibility of spare parts, or wrong description etc.</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="custom-copyright-text">
          Copyright 2022 © All rights reserved. Last Modified - 03 March 2022
        </p>
      </div>
    </>

  );
};

export default Disclaimer;
