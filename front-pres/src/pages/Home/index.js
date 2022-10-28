import React from 'react';

import './index.css';

import logo from '../../Assets/images/logo.jpg';
import Navbar from '../../components/Navigation/index.js'

function Home() {
  return (
    <header className='cntHeader'>
      <div className='cardHeaderHome'>
        <h1 className='mainTitle'>
              Control de presupuesto personal.</h1>
        <img className='imgHeader' src={logo} alt='headerImg'/>
        <Navbar />
      </div>
    </header>

  );
}

export default Home;
