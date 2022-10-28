import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

import { UserContext } from '../../context/UserContext.js';
import BudgetHeader from '../../components/Header/index.js';
import Cards from '../../components/Cards/index.js';
import Movements from '../../components/Movements/index.js';
import BudgetFooter from '../../components/Footer/index.js';
import BudgetAside from '../../components/Aside/index.js';


function Budget() {
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userName === '') navigate('/login');
  }, []); // eslint-disable-line

  return (
    <>
      <BudgetHeader />
      <div className='cntMainAside'>
        <main className='cntMain'>
          <Cards />
          <Movements />
        </main>
        <aside className='cntAside'>
          <BudgetAside />
        </aside>
      </div>
      <BudgetFooter />
    </>
  );
}

export default Budget;
