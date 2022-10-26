import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardExpenses() {
  const [ expenses, setIncomes ] = useState(0);
  const { loggedUserId } = useContext(UserContext);
  const apiUrl = `http://localhost:3010/expenses/${loggedUserId}`;

  useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(response => setIncomes(response))
    // eslint-disable-next-line
  }, []);

  return (
    <div className='card'>
      <p>Total Egresado:</p>
      <p className='cardNumber'>${expenses.total}</p>

    </div>
  );
}

export default CardExpenses;