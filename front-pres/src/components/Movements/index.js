import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import './index.css'

import imgDelete from '../../Assets/images/delete.png';
import imgUpdate from '../../Assets/images/rotate.png';

import { UserContext } from '../../context/UserContext.js';

function Movements() {
  const [ movements, setMovements ] = useState([]);
  const { loggedUserId, setUpdateComponents, API_URL } = useContext(UserContext);

  useEffect(() => {
    updateMovements();
    // eslint-disable-next-line
  }, []);

  const updateMovements = async () => {
    let apiUrl = `${API_URL}/budget/${loggedUserId}/movements`;

    const response = await fetch(apiUrl)
    const data = await response.json();

    setMovements(data);
  }

  const handleDelete = async (e) => {
    let id = e.target.alt;
    let apiUrl = `${API_URL}/budget/${id}`

    await fetch(apiUrl, {method: "DELETE"})

    updateMovements();
    setUpdateComponents(1);
  };

  return <>
    <section>
      <div className='cntTableMov'>
        <p className='titleMov thDate'>Fecha</p>
        <p className='titleMov thConcept'>Descripcion</p>
        <p className='titleMov thAmount'>Monto</p>
        <p className='titleMov thType'>Tipo Movimiento</p>
        <p className='titleMov thDelete'>X</p>
        <p className='titleMov thUpdate'>U</p>
      </div>
      
      {
        movements.map( ({ id, date, concept, amount, type }) =>
          <>
            <div className='cntMovMov'>
              <p className='rowMov tdDate'>{date.substring(0, 10)}</p>
              <p className='rowMov tdConcept'>{concept}</p>
              <p className='rowMov tdAmount'>{amount}</p>
              <p className='rowMov tdType'>{type}</p>
              <p className='rowMov tdDelete'>
                <button className='btnDelete' 
                                            onClick={(e) => handleDelete(e)}>
                  <img alt={id} className='imgDelete' src={imgDelete} />
                </button>
              </p>
              <p className='rowMov'>
                <Link 
                    to='/updateMove'
                    className='cntLinkUpdate'
                    state={
                      { movement: movements.filter((item) => item.id === id) }
                    }>
                  <img alt={id} className='imgUpdate' src={imgUpdate} />
                </Link>
              </p>
            </div>
            <hr />
          </>
        )
      }
    </section>    
  </>
}

export default Movements;
