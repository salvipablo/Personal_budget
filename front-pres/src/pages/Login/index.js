import React from 'react';

import './index.css'

import FrmLogin from '../../components/FrmLogin/index.js';

function Login() {
  return (
    <section>
      <h2 className='formTitle'>Ingresa tus datos para empezar a operar.</h2>
      <FrmLogin />
    </section>
  );
}

export default Login;