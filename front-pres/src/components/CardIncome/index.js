import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardIncome() {
  const [ incomes, setIncomes ] = useState(0);
  const { loggedUserId, updateComponents } = useContext(UserContext);
  const apiUrl = `http://localhost:3010/income/${loggedUserId}`;

  const updateCardIncomes = async () => {
    const response = await fetch(apiUrl);
    const information = await response.json();
    const { total } = information;
    setIncomes(total);
  }
  useEffect(() => {
    updateCardIncomes();
    // eslint-disable-next-line
  }, [updateComponents]);

  return (
    <div className='card'>
      <p>Total Ingresado:</p>
      <p className='cardNumber'>${incomes}</p>
    </div>
  );
}

export default CardIncome;