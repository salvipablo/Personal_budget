import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function BudgetAside() {
  return (
    <section className='cntAsideBtns'>
        <Link className='linkAside' to='/newMove'>Nuevo Movimiento</Link>
    </section>
  );
}

export default BudgetAside;