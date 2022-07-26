import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title="Lorem ipsum dolor sit amet" button="Donwload"/>
      <Presentation />
      <About image={aboutimage1} title="Lorem ipsum dolor sit amet" button="Donwload"/>
      <Contact />
    </div>
  );
}

export default App;
