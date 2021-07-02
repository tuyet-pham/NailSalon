import './App.css';
import React from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';

import PageTemplate from './Pagetemplate';
import BottomNav from './component/BottomNav';
import Header from './component/Header'
import CustomCarousel from './component/CustomCarousel'
import CustomButton from './component/CustomButton'


import Contact from './component/Contact';
import Services from './component/Services';
import Gallery from './component/Gallery';
import TopNav from './component/TopNav';
import { FaInbox, FaPhone } from "react-icons/fa";


function Landing(){
  return (
    <div>
      <hr/>
      <Header/>
      <hr/>
      <CustomCarousel type="1"/>
      <CustomButton link="/gallery" message="Show Gallery"/>
      <hr/>
      <CustomCarousel type="2"/>
      <CustomButton link="/services" message="All Services"/>
      <hr/>
      <Contact/>
    </div>
    );
}


function Sidebar(){
  return (
    <div className="side-bar">
      <a className="btn" href="tel:5554280940"><FaPhone/></a>
      <a className="btn" href="mailto:gns@gmail.com"><FaInbox/></a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Router>
        <TopNav/>
        <PageTemplate path="/(home|)/" component={Landing} pageName="Landing"/>
        <PageTemplate path="/services" component={Services} pageName="Services"/>
        <PageTemplate path="/gallery" component={Gallery} pageName="Gallery"/>
      </Router>
      <BottomNav/>
    </div>
  );
}

export default App;
