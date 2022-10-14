import React, { useEffect, useState } from 'react'

import './index.css'

import imgDelete from '../../Assets/images/delete.png';
import imgUpdate from '../../Assets/images/rotate.png';

function Movements() {
  const [ movements, setMovements ] = useState([]);
  const apiUrl = `http://192.168.0.132:3000/budget/1/movements`;

  useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(response => setMovements(response))
    // eslint-disable-next-line
  }, []);

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
        movements.map( ({ date, concept, amount, type }) =>
          <>
            <div className='cntMovMov'>
              <p className='rowMov'>{date.substring(0, 10)}</p>
              <p className='rowMov'>{concept}</p>
              <p className='rowMov'>{amount}</p>
              <p className='rowMov'>{type}</p>
              <p className='rowMov'>-</p>
              <button className='rowMov btnDelete'>
                <img className='imgDelete' src={imgDelete} />
              </button>
              <button className='rowMov btnUpdate'>
                <img className='imgUpdate' src={imgUpdate} />
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