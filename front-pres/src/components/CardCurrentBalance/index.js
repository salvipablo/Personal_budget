import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardCurrentBalance() {
  const [ currentBalance, setCurrentBalance ] = useState(0);
  const { loggedUserId, updateComponents } = useContext(UserContext);
  const apiUrl = `http://localhost:3010/currentBalance/${loggedUserId}`;

  const updateCardBalance = async () => {
    const response = await fetch(apiUrl);
    const information = await response.json();
    const { result } = information;
    setCurrentBalance(result);
  }

  useEffect(() => {
    updateCardBalance();
    // eslint-disable-next-line
  }, [updateComponents]);

  return (
    <div className='card'>
      <p>SALDO ACTUAL:</p>
      <p className='cardNumber'>${currentBalance}</p>
    </div>
  );
}

export default CardCurrentBalance;