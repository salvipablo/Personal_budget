import React from 'react';

import './index.css';

import iconHeader from '../../Assets/images/iconHeader.png';

function BudgetHeader() {
  return (
    <header className='headerBudget'>
      <div className='cntHeaderContent'>
        <div className='cntHeaderLeft'>
          <img className='imgHeaderBudget' src={iconHeader} />
          <h1 className='titleHeader'>Presupuesto Personal</h1>
        </div>
        <div className='cntHeaderRight'>
          <button className='btnSession'>Cerrar Sesion</button>
        </div>
      </div>
    </header>
  );
}

export default BudgetHeader;