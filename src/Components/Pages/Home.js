import React from 'react';
// import company from '../Assets/logo.png'
// import wall from '../Assets/wall.jpg'
import bosch from '../Assets/bosch.jpg';
import motherson from '../Assets/motherson.jpg';
import igb from '../Assets/igb.jpg';
import mac from '../Assets/mac.jpg';
import phc from '../Assets/phc.jpg';
import valeo from '../Assets/valeo.jpg';
import uno from '../Assets/uno.jpg';
import original from '../Assets/original.jpg'
import afford from '../Assets/afford.jpg'
import wide from '../Assets/wide.jpg'
import logo from '../Assets/free.jpg'
import logo1 from '../Assets/downloadsecure.jpg'
import logo2 from '../Assets/available.jpg'
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../Assets/mech1.jpg";
import { useEffect, useState } from 'react';
import './CSS/Home.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import vedio1 from '../Assets/video (2160p).mp4'
import vedio2 from '../Assets/167659 (720p).mp4'



const Home = ({ aboutClass }) => {
  // const [animationClass, setAnimationClass] = useState('');

  // useEffect(() => {
  //   // Trigger animation when component mounts
  //   setAnimationClass('animate');

  //   // Cleanup animation class after the animation duration
  //   const timeoutId = setTimeout(() => {
  //     setAnimationClass('');
  //   }, 1000); // Set the duration according to your CSS animation duration

  //   return () => clearTimeout(timeoutId); // Cleanup on component unmount
  // }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 3000,    // Set the duration (in milliseconds) between slides
  };
  const videos = [vedio1, vedio2];

  return (
    <div>
      {/* <img src={company} alt="Top Image" style={{ width: '10%', height: 'auto' }} /> */}
      <Slider {...settings}>
        {videos.map((videoSource, index) => (
          <div key={index}>
            <div className="carousel-slide">
              <video autoPlay loop muted className="carousel-video">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="carousel-text">
                <h1 className="animate__animated animate__fadeIn">Welcome to Boodmo</h1>
                <p className="animate__animated animate__fadeIn">Boodmo is best for the Spare Parts</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <section
        className="about__section"
        style={
          aboutClass === "aboutPage"
            ? { marginTop: "10px" }
            : { marginTop: "80px" }
        }
      >
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__section-content">
                <h4 >
                  Welcome To The Boodmo
                </h4>
                <p className="section__description">
                  Our project was established in 2015. Over this time we have been working on our goal – to help customers and suppliers in auto car spare parts sales and communication. This advertising platform was created to make online shopping easier for both automobile owners and parts dealers. Customers get an opportunity to buy car parts online, which are branded and original. Our continuously updated catalogs are filled with replacement parts, with well-known, and highly regarded brands. This provides auto parts suppliers with the ability to offer their products, communicate with clients, and increase sales along with their market share.
                </p>
                <br />
                <div>
                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-check-line"></i> Cost Effective
                    </p>

                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-check-line"></i> 100% Trust
                    </p>
                  </div>

                  <div className="about__section-item d-flex align-items-center">
                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-check-line"></i> Free Delivery
                    </p>

                    <p className="section__description d-flex align-items-center gap-2">
                      <i className="ri-check-line"></i> 100% Original Product
                    </p>
                  </div>
                </div>

              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="your-component">
        <div className="features">
          <div className="feature">
            <img src={logo} alt="Your Logo1" />
            <h3>Free Delivery</h3>
            <p>For All Products</p>
          </div>
          <div className="feature">
            <img src={logo1} alt="Your Logo2" />
            <h3>Safe Payment</h3>
            <p>Easy Returns 10 Days Return Policy</p>
          </div>
          <div className="feature1">
            <img src={logo2} alt="Your Logo3" />
            <h3>24/7 Help Center</h3>
            <p>24/7 Service Available</p>
          </div>
        </div>
      </div>
      <section className="why-us-section">
        <h2>Why Choose Aftermarket Products?</h2>
        <div className="why-us-content">
          <div className="why-us-item">
            <img src={original} alt='' />
            <h3>Original Products</h3>
            <p>Only reliable parts from trusted Aftermarket brands.</p>
          </div>
          <div className="why-us-item">
            <img src={afford} alt='' />
            <h3>Affordable Rates</h3>
            <p>Repairing a damaged vehicle can be expensive. Using the aftermarket products is a good solution if you're on a budget.</p>
          </div>
          <div className="why-us-item">
            <img src={wide} alt='' />
            <h3>Wide Range</h3>
            <p>We have something for everyone when it comes to aftermarket products. Just apply the "Aftermarket" filter in the catalogue and check the offers.</p>
          </div>
        </div>
      </section>
      
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
        }}
        className="about-container"
      >
        <header
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '15px',
          }}
        >
          <h1> Brand We Trust</h1>
        </header>
        <section
          style={{
            marginTop: '20px',
            position: 'relative',
          }}
          className="about-content"
        >
          <div className="image-container">
            <div className="logo-card">
              <img src={bosch} alt="Bosch" />
            </div>

            <div className="logo-card">
              <img src={motherson} alt="Motherson" />
            </div>

            <div className="logo-card">
              <img src={igb} alt="IGB" />
            </div>

            <div className="logo-card">
              <img src={mac} alt="Mac" />
            </div>

            <div className="logo-card">
              <img src={phc} alt="PHC" />
            </div>

            <div className="logo-card">
              <img src={valeo} alt="Valeo" />
            </div>

            <div className="logo-card">
              <img src={uno} alt="Uno" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

