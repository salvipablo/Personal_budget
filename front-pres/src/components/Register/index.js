import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { UserContext } from '../../context/UserContext.js';

function FrmRegister() {
  const { API_URL } = useContext(UserContext);
  const [ user, setUser ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const apiUrl = `${API_URL}/users`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newUserToAdd = {
      username: user,
      email: email,
      password: password,
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(newUserToAdd),
      headers: {"Content-type": "application/json"}
    })
    const information = await response.json();

    if (response.status === 201) 
      alert(`User: ${information.username} created successfully`)
    else
      alert(information.message);
  }

  return <>
    <form className='frmRegister' onSubmit={handleSubmit}>
      <label className='lblFrmRegister'>Usuario:</label>
      <input className='inputRegister' type='text' 
          placeholder='Ingrese usuario........' 
          onChange={(e) => setUser(e.target.value)}/>
      <br />
      <label className='lblFrmRegister'>Mail</label>
      <input className='inputRegister' type='text'
          placeholder='Ingrese email.......'
          onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label className='lblFrmRegister'>Contraseña</label>
      <input className='inputRegister' type='password'
          placeholder='Ingrese cotraseña.......'
          onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input className='btnSubmitRegister' type='submit' value='Enviar'></input>
    </form>
    <Link className='linkRegister' to='/'>Volver a la pantalla principal</Link>
  </>;
}

export default FrmRegister;
