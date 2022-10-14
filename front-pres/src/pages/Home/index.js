import React from 'react';

import './index.css';

import logo from '../../Assets/images/logo.jpg';
import Navbar from '../../components/Navigation/index.js'

function Home() {
  return (
    <header className='cntHeader'>
      <div className='cntHeaderImg'>
        <img className='imgHeader' src={logo} alt='headerImg'/>
        <h1 className='mainTitle'>
                          Bienvenido a su sistema de presupuesto personal.</h1>
      </div>
      <Navbar />
    </header>

  );
}

export default Home;