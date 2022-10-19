import React, { useEffect, useState } from 'react';

function CardCurrentBalance() {
  const [ currentBalance, setCurrentBalance ] = useState(0);
  const apiUrl = `http://localhost:3010/currentBalance/1`;

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