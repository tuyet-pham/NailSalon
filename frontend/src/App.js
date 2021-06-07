import './App.css';
import React from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
import PageTemplate from './Pagetemplate';
import BottomNav from './component/BottomNav';
import './pages/pages.css';
import Header from './component/Header'
import CustomCarousel from './component/CustomCarousel'
import CustomButton from './component/CustomButton'

import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import TopNav from './component/TopNav';

function Services(){
  return (
    <div className="service-page">
      <h2 className="header-s">Services</h2>
      <div className="service-box">
        <div className="service-sub-box">
          <div>
            
            <h2 className="header-s2">Pedicure</h2>
            <p>
              Google uses 200+ factors to determine which website to show first on the search results page. 
              They use a super advanced algorithm to analyze the web and decide this.
            </p>
            <p>. . .</p>

            <h2 className="header-s2">Manicure</h2>
            <p>
              You’ll also be able to allow users to rate your salon which is the best 
              proof of quality of your salon you can have.
            </p>
            <p>. . .</p>

            <h2 className="header-s2">Kids</h2>
            <p>
              Bing is the second largest search engine after Google and have about 7% of searches today. 
              Similarly to Google My Business, they offer something called Bing Places
            </p>
            <p>. . .</p>
          </div>
        </div>
        <div className="service-sub-box">
          <div>
            <h2 className="header-s2">Threading</h2>
              <p>
                Google uses 200+ factors to determine which website to show first on the search results page. 
                They use a super advanced algorithm to analyze the web and decide this. 
              </p>
              <p>. . .</p>
            <h2 className="header-s2">Waxing</h2>
              <p>
                Bing is the second largest search engine after Google and have about 7% of searches today. 
                Similarly to Google My Business, they offer something called Bing Places
              </p>
              <p>. . .</p>

            <h2 className="header-s2">Lashes</h2>
              <p>
                Congratulations. You’ve just taken a massive leap forward to improve your salon’s performance on search. 
                But just registering for Google My Business, Apple Maps
              </p>
              <p>. . .</p>
          </div>
        </div>
      </div>
    </div>
    );
}



function About(){
  return (
    <div>
      Hey
    </div>
  );
}

function Landing(){
  return (
    <div>
      <Header/>
      <About />
      <CustomCarousel type="1"/>
      <CustomButton link="/gallery" message="Show Gallery"/>
      <CustomCarousel type="2"/>
      <CustomButton link="/services" message="All Services"/>
    </div>
    );
}




function App() {

  return (
    <div className="App">
      <Router>
        <TopNav/>
        <PageTemplate path="/(home|)/" component={Landing} pageName="Landing"/>
        <PageTemplate path="/contact" component={Contact} pageName="Contact"/>
        <PageTemplate path="/services" component={Services} pageName="Services"/>
        <PageTemplate path="/gallery" component={Gallery} pageName="Gallery"/>
      </Router>
      <BottomNav/>
    </div>
  );
}

export default App;
