import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import './index.css'

import imgDelete from '../../Assets/images/delete.png';
import imgUpdate from '../../Assets/images/rotate.png';

import { UserContext } from '../../context/UserContext.js';

function Movements() {
  const [ movements, setMovements ] = useState([]);
  const { loggedUserId } = useContext(UserContext);

  const apiUrl = `http://localhost:3010/budget/${loggedUserId}/movements`;

  useEffect(() => {
    updateMovements();
    // eslint-disable-next-line
  }, []);

  const updateMovements = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json();
    setMovements(data);
  }

  const handleDelete = async (e) => {
    let id = e.target.alt;
    await fetch(`http://localhost:3010/budget/${id}`, {method: "DELETE"})
    updateMovements();
  };

  return <>
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
              <Link 
                  to='/updateMove'
                  className='cntLinkUpdate'
                  state={
                    { movement: movements.filter((item) => item.id === id) }
                  }>
                <img alt={id} className='imgUpdate' src={imgUpdate} />
              </Link>
            </div>
            <hr />
          </>
        )
      }
    </section>    
  </>
}

export default Movements