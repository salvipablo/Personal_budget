import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardIncome() {
  const [ incomes, setIncomes ] = useState(0);
  const { loggedUserId } = useContext(UserContext);
  const apiUrl = `http://localhost:3010/income/${loggedUserId}`;

  useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(response => setIncomes(response))
    // eslint-disable-next-line
  }, []);

  return (
    <div className='card'>
      <p>Total Ingresado:</p>
      <p className='cardNumber'>${incomes.total}</p>
    </div>
  );
}

export default CardIncome;