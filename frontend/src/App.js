import './App.css';
import React from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
import PageTemplate from './Pagetemplate';
import BottomNav from './component/BottomNav';


// import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Landing from './pages/Landing';
import TopNav from './component/TopNav';



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
