// ReturnPolicy.js

import React from 'react';
import '../Policy/CSS/ReturnPolicy.css';
import company from '../Assets/logo.png'

const PolicySection = ({ title, content }) => {
  return (
    <div className="return-policy-section">
      <h2>{title}</h2>
      <div className="return-policy-content">
        {content}
      </div>
      <hr className="return-policy-divider" />
    </div>
  );
};

const ReturnPolicy = () => {
  return (
    <>
      <a href="/home">
        <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} />
      </a>
      <div className="return-policy-container">
        <h1 className="return-policy-title">RETURN, CANCELLATION AND REFUND POLICY</h1>
        <div className="return-policy-content">
          <h3>A. Introduction</h3>
          <p>
            <strong>01.</strong> Boodmo.com (“boodmo”) is a web portal owned and operated by Smart Parts Online Private Limited, (“Company/ We/ Us/ Our”), a Company incorporated under the Companies Act, 2013. Our registered office is located at AIHP Palms, Ground Floor, Plot 242 & 243, Udyog Vihar, Phase 4, Gurugram, Haryana – 122015. We operate under the trademarked name “boodmo – spare parts expert” and serve as an online marketplace for automotive spare parts.
          </p>
          <p>
            <strong>02.</strong> At boodmo, we prioritize providing a seamless experience, including easy returns, cancellations, and refunds, for any natural or legal person (“Customer/ Consumer/ User/ You/ Your”) interested in purchasing products or services listed on our web portal and mobile application, collectively referred to as “boodmo – spare parts expert” (singularly known as a platform). This Return, Cancellation, and Refund Policy (“Policy”) have been established to ensure transparency and govern your use of any of our platforms.
          </p><hr /><br />

          <h3>B.Contractual Relationship</h3>
          <p>
            <strong>01.</strong>This policy constitutes a legally binding and enforceable agreement between the company and the user(s) interested in buying products and or services (“Services”) on our platforms and shall expressly supersede prior written agreements with you.
          </p><hr /><br />

          <h3>C. Acceptance</h3>
          <p>
            <strong>01.</strong>boodmo provides a platform(s) for its customer(s) to search for required products and or services, subject to this policy. By using the platform(s) in any way, you agree to be bound by this policy. Furthermore, when purchasing any product(s) and or service(s), you agree to abide by all applicable guidelines policy(s), which are subject to change from time to time and without any prior intimation. In case you do not agree to this policy, you may not use or access or stop your use or access to our platform(s). You are requested to read and understand this policy before accessing or using the platform(s).
          </p>
          <p>
            <strong>02.</strong>You hereby represent that you are eighteen (18) years of age or above (“legal age”) and are fully able and competent to understand and agree to the Terms, conditions, obligations, affirmations, representations, and warranties set forth in this policy and to abide by and comply with the terms stated therein. If you are under the age of 18 years, you may use the platform(s) only with the involvement of an adult, whether parents, guardians or any other person of or above the legal age.
          </p>
          <p>
            <strong>03.</strong>If you are using the platform(s) on behalf of an Organisation Company, you agree to this policy on behalf of that Organisation Company and you represent that you have the authority to act on behalf of the Organisation Company.
          </p>
          <p>
            <strong>04.</strong>Should you object to this policy, any guidelines, or any subsequent modifications thereto or become dissatisfied with boodmo in any way, your only recourse is to immediately discontinue the use of our platform(s). You are, however, encouraged to inform our customer care team here, who shall endeavour to address your concerns.
          </p>
          <p>
            <strong>05.</strong>Applicable products and services may be returnable within the applicable return window of 1 calendar day if you have received them in a condition that is either physically damaged, has missing parts or accessories, defective and or different from their description on the product detail page of our platform(s). However, you are encouraged to ensure that you have checked for compatibility and applicability of our products and or services before such purchase. The Company shall not be obligated to perform under this Policy in case of non-compatibility, non-applicability and misjudgement of products and or services purchased from our platform(s).
          </p><hr /><br />
        </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
