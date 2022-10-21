import React, { useState, useEffect } from 'react';

function FrmUpdateMove(props) {
  const [ frmConcept, setFrmConcept ] = useState('');
  const [ frmAmount, setFrmAmount ] = useState(0);
  const [ frmDate, setFrmDate ] = useState('');
  const [ frmType, setFrmType ] = useState('');

  const { recIdtoUpdate, listMovements } = props;

  const recToUpdate = listMovements.filter((item) => item.id === parseInt(recIdtoUpdate));

  const { id, concept, amount, date, type } = recToUpdate[0];

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

    let apiUrl = `http://localhost:3010/budget/${id}`;

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

  console.log('Renderizado');
  return <>
    <form className='frmUpdateMove' onSubmit={handleUpdate}>
      <label className='lblFrmNewMove'>Concepto:</label>
      <input className='inputFrmNewMove' type='text'
          defaultValue ={concept}
          onChange={(e) => setFrmConcept(e.target.value)}
      />
      <br />
      <label className='lblFrmNewMove'>Monto de movimiento</label>
      <input className='inputFrmNewMove' type='number' step=".01"
          defaultValue={parseFloat(amount)}
          onChange={(e) => setFrmAmount(e.target.value)}
      />
      <br />
      <label className='lblFrmNewMove'>Fecha</label>
      <input className='inputFrmNewMove' type='date'
          defaultValue={frmDateDef} 
          onChange={(e) => setFrmDate(e.target.value)}
      />
      <br />
      <label className='lblFrmNewMove'>Tipo de movimiento</label>
      <select className='inputFrmNewMove' name="select" 
          onChange={(e) => setFrmType(e.target.value)}>
        <option value="-">-</option>
        {whatType === 1 ? (<option value="Ingreso" selected>Ingreso</option>) :
            (<option value="Ingreso">Ingreso</option>)}
        {whatType === 2 ? (<option value="Egreso" selected>Egreso</option>) :
            (<option value="Egreso">Egreso</option>)}
      </select>
      <br />
      <input className='btnSubmitUpdateMove' type='submit' value='Enviar' />
      <button onClick={()=>props.getData('volvi')} >Click Me</button>
    </form>
  </>
}

export default FrmUpdateMove;