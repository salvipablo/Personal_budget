import React from 'react';

import FrmRegister from '../../components/Register/index.js';

import './index.css';

function Register() {
  return (
    <section className='cntFrmRegister'>
      <h2 className='titleRegister'>Crear Cuenta.</h2>
      <FrmRegister />
    </section>
  );
}

export default Register;