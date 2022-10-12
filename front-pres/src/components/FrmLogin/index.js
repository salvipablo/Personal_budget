import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

import { UserContext } from '../../context/UserContext.js';

function FrmLogin() {
  const [ nameUser, setNameUser ] = useState('');
  const [ password, setPassword ] = useState('');

  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const grantAccess = () => {
    sessionStorage.setItem('userPres', nameUser);
    updateUser(nameUser);
    navigate('/budget');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameUser === 'psalvi' && password === '10') grantAccess();
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