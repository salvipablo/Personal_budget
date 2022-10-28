import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Navbar() {
  return (
    <div className='cntNavLinks'>
      <Link className='linkNavHeader' to='/login'>Ingresar</Link>
      <Link className='linkNavHeader' to='/register'>Crear cuenta</Link>
    </div>
  );
}

export default Navbar;
