import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';   
import Header from './components/header'; 
import Footer from './components/footer';
import './App.css';
import './assets/scss/index.scss'; 
import Home from './pages/home';
import WhatWeDo from './pages/whatwedo';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import TestimonialPage from './pages/testimonials';
import NotFound from './pages/error';
import * as PATHS from './CONSTANTS'


function App() {
  return (
    <Router>
        <Header/> 
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.WHATWEDO} element={<WhatWeDo />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/testimonials' element={<TestimonialPage />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
