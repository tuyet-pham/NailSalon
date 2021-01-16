import React from 'react';
import Header from '../component/Header'
import About from './About'
import CustomCarousel from '../component/CustomCarousel'
import CustomButton from '../component/CustomButton'


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

export default Landing;