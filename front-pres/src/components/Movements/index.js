import React, { useEffect, useState } from 'react'

import './index.css'

import imgDelete from '../../Assets/images/delete.png';
import imgUpdate from '../../Assets/images/rotate.png';
import FrmUpdateMove from '../FrmUpdateMove';

function Movements() {
  const [ movements, setMovements ] = useState([]);
  const [ yesUpdate, setyesUpdate ] = useState(0);
  const [ recordIDUpdate, setRecordIDUpdate ] = useState(0);

  const apiUrl = `http://localhost:3010/budget/1/movements`;

  useEffect(() => {
    updateMovements();
    // eslint-disable-next-line
  }, [yesUpdate]);

  const updateMovements = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json();
    setMovements(data);
  }

  const handleDelete = async (e) => {
    let id = e.target.alt;
    await fetch(`http://localhost:3010/budget/${id}`, {method: "DELETE"})
    updateMovements();
    setyesUpdate(2);
  };

  const handleUpdate = (e) => {
    setyesUpdate(1);
    setRecordIDUpdate(e.target.alt);
  }

  function getName(name) {
    setyesUpdate(0);
  }

  console.log('** Estoy en el return **');

  return <>
    { 
      yesUpdate === 1
      ? <FrmUpdateMove getData={getName} recIdtoUpdate={recordIDUpdate} listMovements={movements}/>
      : 
      <section>
        <div className='cntTableMov'>
          <p className='titleMov'>Fecha</p>
          <p className='titleMov'>Descripcion</p>
          <p className='titleMov'>Monto</p>
          <p className='titleMov'>Tipo Movimiento</p>
          <p className='titleMov'>Categoria</p>
          <p className='titleMov'>Eliminar</p>
          <p className='titleMov'>Actualizar</p>
        </div>
        
        {
          movements.map( ({ id, date, concept, amount, type }) =>
            <>
              <div className='cntMovMov'>
                <p className='rowMov'>{date.substring(0, 10)}</p>
                <p className='rowMov'>{concept}</p>
                <p className='rowMov'>{amount}</p>
                <p className='rowMov'>{type}</p>
                <p className='rowMov'>-</p>
                <button className='rowMov btnDelete' 
                                            onClick={(e) => handleDelete(e)}>
                  <img alt={id} className='imgDelete' src={imgDelete} />
                </button>
                <button className='rowMov btnUpdate' 
                                            onClick={(e) => handleUpdate(e)}>
                  <img alt={id} className='imgUpdate' src={imgUpdate} />
                </button>
              </div>
              <hr />
            </>
          )
        }
      </section>    
    }
  </>
}

export default Movements