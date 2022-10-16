import React, { useEffect, useState } from 'react';

function CardExpenses() {
  const [ expenses, setIncomes ] = useState(0);
  // Trabajo.
  // const apiUrl = `http://192.168.0.132:3000/expenses/1`;

  // Casa.
  const apiUrl = `http://localhost:3001/expenses/1`;

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