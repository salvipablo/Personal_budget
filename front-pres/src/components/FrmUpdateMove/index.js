import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { UserContext } from '../../context/UserContext.js';

function FrmUpdateMove(props) {
  const { API_URL } = useContext(UserContext);
  const [ frmConcept, setFrmConcept ] = useState('');
  const [ frmAmount, setFrmAmount ] = useState(0);
  const [ frmDate, setFrmDate ] = useState('');
  const [ frmType, setFrmType ] = useState('');

  const { id, concept, amount, date, type } = props;
  
  let frmDateDef = date.substring(0, 10);

  let whatType;
  if (type === 'Ingreso') whatType = 1;
  else whatType = 2;
  
  useEffect(() => {
    setFrmConcept(concept);
    setFrmAmount(amount);
    setFrmType(type);
    setFrmDate(frmDateDef);
  }, []); // eslint-disable-line

  const handleUpdate = async (e) => {
    e.preventDefault();

    let apiUrl = `${API_URL}/budget/${id}`;

    let newMove = {
      concept: frmConcept,
      amount: parseFloat(frmAmount),
      date: frmDate,
      type: frmType,
    }

    const response = await fetch(apiUrl, {
      method: "PUT",
      body: JSON.stringify(newMove),
      headers: {"Content-type": "application/json"}
    })
    const information = await response.json();
    alert(information.message);
  }

  return <>
    <form className='frmUpdateMove' onSubmit={handleUpdate}>
      <label className='lblFrmUpdate'>Concepto:</label>
      <input className='inputFrmUpdate' type='text'
          defaultValue ={concept}
          onChange={(e) => setFrmConcept(e.target.value)}
      />
      <br />
      <label className='lblFrmUpdate'>Monto de movimiento</label>
      <input className='inputFrmUpdate' type='number' step=".01"
          defaultValue={parseFloat(amount)}
          onChange={(e) => setFrmAmount(e.target.value)}
      />
      <br />
      <label className='lblFrmUpdate'>Fecha</label>
      <input className='inputFrmUpdate' type='date'
          defaultValue={frmDateDef} 
          onChange={(e) => setFrmDate(e.target.value)}
      />
      <br />
      <label className='lblFrmUpdate'>Tipo de movimiento</label>
      <select className='inputFrmUpdate' name="select" 
          onChange={(e) => setFrmType(e.target.value)}>
        <option value="-">-</option>
        {whatType === 1 ? (<option value="Ingreso" selected>Ingreso</option>) :
            (<option value="Ingreso">Ingreso</option>)}
        {whatType === 2 ? (<option value="Egreso" selected>Egreso</option>) :
            (<option value="Egreso">Egreso</option>)}
      </select>
      <br />
      <input className='btnSubmitUpdateMove' type='submit' value='Enviar' />
    </form>
    <Link className='linkFrmUpdate' to='/budget'>
      Volver a la pantalla principal
    </Link>
  </>
}

export default FrmUpdateMove;
