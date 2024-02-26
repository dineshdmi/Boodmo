// AntiBriberyPolicy.js

import React from 'react';
import './CSS/Anti_corruption_Policy.css';
import company from '../Assets/logo.png';


const AntiBriberyPolicy = () => {
  return (
    <>
      <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />

    <div className="anti-bribery-container">
      <h1>Anti-Bribery, Corruption, and Money Laundering Policy</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>
          <strong>1.1</strong> www.boodmo.com (“boodmo”) is a web portal, owned and operated by M/s Smart Parts Online Private Limited, (“Company/We/Us/Our”) a Company incorporated under the Companies Act, 2013, having its registered office at AIHP Palms, Ground Floor, Plot 242 & 243, Udyog Vihar, Phase 4, Gurugram, Haryana – 122015 operating under the trademarked name “boodmo – spare parts expert” is an online marketplace for automotive spare parts.
        </p>
        <p><strong>1.2</strong> boodmo has always been relentless against disloyal business behaviours and corruption from any business partner (“partners”) interested to enter into any transaction. To emphasize a zero-tolerance approach to bribery and corruption, boodmo establishes the principles through this Anti-Bribery, Corruption and Money Laundering  (“Policy”).
        </p>
      </section><hr />

      <section>
        <h2>2. Definitions</h2>
        <h3><strong>Associates</strong></h3>
        <p>Associates stands as a collective term for all individuals working at all the levels and grades, including senior managers, officers, directors, employees (whether permanent, fixed-term or temporary), consultants, contractors, trainees, volunteers, service providers, seconded staff, casual workers and agency staff, agents, or any other person associated with boodmo, wherever located.</p><br />

        <h3><strong>Business Partners</strong></h3>
        <p>Business Partner stands as a collective term used for Consultants, Logistic partners, Vendors, Contractors, Youtubers, Agents, Intermediaries, any other Service Providers and associates of such third parties with whom boodmo enters into contract(s).</p><br />

        <h3><strong>Bribery</strong></h3>
        <p>Bribery means the offering, promising, giving, receiving, soliciting or accepting of a financial or other advantage, or any other thing of value, with the intention of influencing or rewarding the behaviour of a person in a position of trust to perform a public, commercial or legal function to obtain or retain a commercial advantage. Bribery includes any attempt to do any of the foregoing as well. Bribes are payments made in the form of money or anything else of value in return for a business favour or advantage.</p>
      </section>

      {/* Add more sections as needed */}

      <p className="disclaimer">
        This is a React component for displaying your Anti-Bribery Policy content.
      </p>
    </div>
    </>
  );
};

export default AntiBriberyPolicy;
