import React, { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext.js';

function CardCurrentBalance() {
  const [ currentBalance, setCurrentBalance ] = useState(0);
  const { loggedUserId } = useContext(UserContext);
  const apiUrl = `http://localhost:3010/currentBalance/${loggedUserId}`;

  useEffect(() => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(response => setCurrentBalance(response))
    // eslint-disable-next-line
  }, []);

  return (
    <div className='card'>
      <p>SALDO ACTUAL:</p>
      <p className='cardNumber'>${currentBalance.result}</p>
    </div>
  );
}

export default CardCurrentBalance;