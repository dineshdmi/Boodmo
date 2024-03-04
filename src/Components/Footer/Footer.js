// Footer.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RiCarLine, RiSendPlaneLine, RiCopyrightLine, RiArrowUpSLine } from 'react-icons/ri';
import './Footer.css';
import Chat from '../Pages/Chat';
import { GrContact } from "react-icons/gr";

const quickLinks = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/login', display: 'Login' },
  { path: '/contact', display: 'Contact' },
  { path: '/product', display: 'Product' },
];

const policyLinks = [
  { path: '/privacy-policy', display: 'Privacy Policy' },
  { path: '/return-policy', display: 'Return Policy' },
  { path: '/disclaimer', display: 'Disclaimer' },
  { path: '/terms-of-use', display: 'Terms of Use' },
  { path: '/buyers-policy', display: 'Buyers Policy' },
  { path: '/sellers-policy', display: 'Sellers Policy' },
  { path: '/anti-corruption-policy', display: 'Anti-corruption Policy' },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [showScroll, setShowScroll] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const closeChat = () => {
    setShowChat(false);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo" style={{ marginTop: '10%' }}>
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <RiCarLine />
                  <span>BoodMo Service</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              India's biggest online marketplace <br /> for car spare parts
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Policy Links</h5>
              <ListGroup>
                {policyLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Head Office</h5>
              <p className="office__info">
                Smart Parts Online Pvt. Ltd.
                AIHP Palms (Plot No. 242 & 243), Ground floor, Udyog Vihar Phase IV, Gurugram, Haryana-122015, India.
              </p>
              <p className="office__info">Phone: +91 114 1189222</p>
              <p className="office__info">Email: your.email@example.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description" style={{ color: 'white' }}>Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <RiSendPlaneLine />
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <div className="chat-icon" onClick={toggleChat}>
                <GrContact style={{ cursor: 'pointer', fontSize: '24px', color: '#007BFF' }} />
                
              </div>
            </div>
            {showChat && (
              <Chat onClose={closeChat} />
            )}
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-2">
                <RiCopyrightLine /> Copyright {year}, Smart Parts Online Pvt. Ltd. (v6.2.8 build 240202.1348)
              </p>
            </div>
          </Col>
        </Row>
        {showScroll && (
          <div className="scroll-to-top" onClick={scrollTop}>
            <RiArrowUpSLine />
          </div>
        )}
      </Container>
      {showChat && <Chat />}
    </footer>
  );
};

export default Footer;
