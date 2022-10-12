import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

function FrmLogin() {
  const [ nameUser, setNameUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const grantAccess = () => {
    sessionStorage.setItem('userPres', nameUser);
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameUser === 'psalvi' && password === 'olimpo10') grantAccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nameUser" placeholder="Nombre de usuario" 
                              onChange={(e) => setNameUser(e.target.value)} />
      <input type="password" name="passUser" placeholder="Contraseña"
                              onChange={(e) => setPassword(e.target.value)} />
      <button>Ingresar</button>
    </form>
  );
}

export default FrmLogin;