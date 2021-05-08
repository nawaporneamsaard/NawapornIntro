import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Education from './components/Education/Education';
import Interest from './components/skills/Interest'
import CarouselImages from './components/carousel/CarouselImages.js'

import Styled from 'styled-components';

const Custom = Styled.div`
  .main{
    background: none;
  }
`

const Custom2 = Styled(Custom)`
  
`

function App() {
  return (
    <Router>
      <div className="App">
        <div className="side">
          <Sidebar />
        </div>
        <Custom2>
        <div className="main">
          <div>
            <CarouselImages />
          </div>
          <br></br>
          <About />
          <br></br>
          <Interest />
          <br></br>
          <Education name="Sara" />
        </div>
        </Custom2>
      </div>
     
    </Router>
  );
}

export default App;
