import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import FrmUpdateMove from '../FrmUpdateMove/index.js';

function BudgetAside() {
  return (
    <section className='cntAsideBtns'>
      <button className='btnAside'>
        <Link className='linkAside' to='/newMove'>Nuevo Movimiento</Link>
      </button>
    </section>
  );
}

export default BudgetAside;