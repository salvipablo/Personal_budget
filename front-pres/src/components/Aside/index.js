import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function BudgetAside() {
  return (
    <section className='cntAsideBtns'>
      <button className='btnAside'>
        <Link className='linkAside' to='/newMove'>Nuevo Movimiento</Link>
      </button>
      <button className='btnAside'>
        <Link className='linkAside' to='/newPass'>Cambiar contraseña</Link>
      </button>
    </section>
  );
}

export default BudgetAside;