import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardExpenses() {
  const [ expenses, setExpenses ] = useState(0);
  const { loggedUserId } = useContext(UserContext);
  const apiUrl = `http://localhost:3010/expenses/${loggedUserId}`;

  const updateCardExpenses = async () => {
    const response = await fetch(apiUrl);
    const information = await response.json();
    const { total } = information;
    setExpenses(total);
  }
  useEffect(() => {
    updateCardExpenses();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='card'>
      <p>Total Egresado:</p>
      <p className='cardNumber'>${expenses}</p>

    </div>
  );
}

export default CardExpenses;