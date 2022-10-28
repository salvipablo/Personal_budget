import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './index.css';

import { UserContext } from '../../context/UserContext.js';

function FrmLogin() {
  const [ emailUser, setEmailUser ] = useState('');
  const [ password, setPassword ] = useState('');

  const { setUserName, setLoggedUserId, API_URL } = useContext(UserContext);

  const navigate = useNavigate();

  const grantAccess = (user) => {
    const { id, username, email } = user
    sessionStorage.setItem('userBudget', username);
    sessionStorage.setItem('emailBudget', email);
    sessionStorage.setItem('idBudget', id);

    setUserName(user.username);
    setLoggedUserId(user.id);

    navigate('/budget');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let apiUrl = `${API_URL}/login`

    let userSearch = {
      email: emailUser,
      password: password
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(userSearch),
      headers: {"Content-type": "application/json"}
    })
    const information = await response.json();

    if (response.status === 403) alert(information.message);
    else grantAccess(information.user);
  };

  return <>
    <form className='formLogin' onSubmit={handleSubmit}>
      <input className='inputLogin' type="email" name="email" 
              placeholder="Email...." 
              onChange={(e) => setEmailUser(e.target.value)} />
      <input className='inputLogin' type="password" name="passUser" 
              placeholder="Contraseña....."
              onChange={(e) => setPassword(e.target.value)} />
      <button className='btnFrmLogin'>Ingresar</button>
    </form>
    <Link className='linkLogin' to='/'>Volver a la pantalla principal</Link>
  </>;
}

export default FrmLogin;