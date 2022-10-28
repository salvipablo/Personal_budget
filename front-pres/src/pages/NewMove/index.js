import React from 'react';

import './index.css';

import FrmNewMove from '../../components/FrmNewMove/index.js';

function NewMove() {
  return (
    <section className='cntFrmNewMove'>
      <h2 className='titleFrmNewMove'>Nuevo movimiento.</h2>
      <FrmNewMove />
    </section>
  );
}

export default NewMove;
