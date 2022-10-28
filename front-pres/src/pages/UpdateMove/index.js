import React from 'react';
import { useLocation } from 'react-router-dom';

import './index.css';

import FrmUpdateMove from '../../components/FrmUpdateMove';

function UpdateMove() {
  const { state } = useLocation();
  const { id, concept, amount, date, type } = state.movement[0];
  
  return (
    <section className='cntFrmUpdate'>
      <h2 className='titleFrmUpdate'>Actualizar movimiento.</h2>
      <FrmUpdateMove 
        id={id}
        concept={concept}
        amount={amount}
        date={date}
        type={type}
      />
    </section>
  );
}

export default UpdateMove;
