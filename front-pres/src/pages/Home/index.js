import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <header>
      <h1>Bienvenido a su sistema de presupuesto personal.</h1>
      <Link to='/login'>Ingresar</Link>
      <Link to='/register'>Crear cuenta</Link>
    </header>
  );
}

export default Home;