import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardIncome() {
  const [ incomes, setIncomes ] = useState(0);
  const { loggedUserId, updateComponents, API_URL } = useContext(UserContext);
  const apiUrl = `${API_URL}/income/${loggedUserId}`;

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
      <p>TOTAL INGRESADO:</p>
      <p className='cardNumber'>${incomes}</p>
    </div>
  );
}

export default CardIncome;
