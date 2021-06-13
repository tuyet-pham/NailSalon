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
