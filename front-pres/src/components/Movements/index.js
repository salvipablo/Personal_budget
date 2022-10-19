import React, { useEffect, useState } from 'react'

import './index.css'

import imgDelete from '../../Assets/images/delete.png';
import imgUpdate from '../../Assets/images/rotate.png';

function Movements() {
  const [ movements, setMovements ] = useState([]);
  const apiUrl = `http://localhost:3010/budget/1/movements`;

  function updateMovements() {
    fetch(apiUrl)
    .then(res => res.json())
    .then(response => setMovements(response))
  }
  useEffect(() => {
    updateMovements();
    // eslint-disable-next-line
  }, [movements]);

  const handleDelete = (e) => {
    let id = e.target.alt;
    let urlApiDelete = `http://localhost:3010/budget/${id}`;

    fetch(urlApiDelete, {method: "DELETE"})
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));

    updateMovements();
  };

  const handleUpdate = (e) => {
    let id = e.target.alt;
    console.log(id);
  }

  return (
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
  )
}

export default Movements