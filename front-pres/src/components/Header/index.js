import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

import iconHeader from '../../Assets/images/iconHeader.png';

function BudgetHeader() {
  let navigate = useNavigate();

  const handleSignOff = async (e) => {
    sessionStorage.removeItem("userBudget");
    sessionStorage.removeItem("emailBudget");
    sessionStorage.removeItem("idBudget");
    navigate('/');
  };

  return (
    <header className='headerBudget'>
      <div className='cntHeaderContent'>
        <div className='cntHeaderLeft'>
          <img alt='imgHeader' className='imgHeaderBudget' src={iconHeader} />
          <h1 className='titleHeader'>Presupuesto Personal</h1>
        </div>
        <div className='cntHeaderRight'>
          <button
            className='btnSession'
            onClick={(e) => handleSignOff(e)}
          >Cerrar Sesion</button>
        </div>
      </div>
    </header>
  );
}

export default BudgetHeader;