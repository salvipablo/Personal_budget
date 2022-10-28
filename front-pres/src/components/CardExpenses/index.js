import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardExpenses() {
  const [ expenses, setExpenses ] = useState(0);
  const { loggedUserId, updateComponents, API_URL } = useContext(UserContext);
  const apiUrl = `${API_URL}/expenses/${loggedUserId}`;

  const updateCardExpenses = async () => {
    const response = await fetch(apiUrl);
    const information = await response.json();
    const { total } = information;
    setExpenses(total);
  }
  useEffect(() => {
    updateCardExpenses();
    // eslint-disable-next-line
  }, [updateComponents]);

  return (
    <div className='card'>
      <p>TOTAL EGRESADO:</p>
      <p className='cardNumber'>${expenses}</p>

    </div>
  );
}

export default CardExpenses;
