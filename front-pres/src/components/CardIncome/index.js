import React, { useEffect, useState } from 'react';

function CardIncome() {
  const [ incomes, setIncomes ] = useState(0);
  // Trabajo.
  //const apiUrl = `http://192.168.0.132:3000/income/1`;

  // Casa.
  const apiUrl = `http://localhost:3001/income/1`;

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