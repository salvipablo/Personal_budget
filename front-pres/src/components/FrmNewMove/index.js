import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function FrmNewMove() {
  // useState para tomar los datos.
  const [ concept, setConcept ] = useState('');
  const [ amount, setAmount ] = useState(0);
  const [ date, setDate ] = useState('');
  const [ type, setType ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if ( type === '' || type === '-' ) alert('No a seleccionado tipo')
    else {
      let newMove = {
        concept: concept,
        amount: parseFloat(amount),
        date: date,
        type: type,
        iduser: 1
      }

      console.log(JSON.stringify(newMove));

      fetch('http://localhost:3001/budget/', {
        method: "POST",
        body: JSON.stringify(newMove),
        headers: {"Content-type": "application/json"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
    }
  }

  return (
    <>
    <form className='frmNewMove' onSubmit={handleSubmit}>
      <label className='lblFrmNewMove'>Concepto:</label>
      <input className='inputFrmNewMove' type='text' 
          placeholder='Ingrese concepto' 
          onChange={(e) => setConcept(e.target.value)}/>
      <br />
      <label className='lblFrmNewMove'>Monto de movimiento</label>
      <input className='inputFrmNewMove' type='number' 
          placeholder='Ingrese monto'
          onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <label className='lblFrmNewMove'>Fecha</label>
      <input className='inputFrmNewMove' type='date' 
          onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <label className='lblFrmNewMove'>Tipo de movimiento</label>
      <select className='inputFrmNewMove' name="select" 
          onChange={(e) => setType(e.target.value)}>
            <option value="-" selected>-</option>
        <option value="Ingreso">Ingreso</option>
        <option value="Egreso">Egreso</option>
      </select>
      <br />
      <input className='btnSubmitNewMove' type='submit' value='Enviar'></input>
    </form>
    <Link className='linkFrmNewMove' to='/budget'>Volver a la pantalla principal</Link>
    </>
  );
}

export default FrmNewMove;