import React from 'react';

import'./index.css';

import CardCurrentBalance from '../CardCurrentBalance/index.js';
import CardIncome from '../CardIncome/index.js';
import CardExpenses from '../CardExpenses/index.js';

function Cards() {
  return (
    <section className='sctCards'>
      <CardCurrentBalance />
      <CardIncome />
      <CardExpenses />
    </section>
  );
}

export default Cards;