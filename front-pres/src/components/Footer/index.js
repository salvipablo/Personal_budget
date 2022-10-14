import React from 'react';
import Trend from 'react-trend';

import './index.css';

function BudgetFooter() {
  return (
    <footer>
      <p className='textFooter'>Creado por Pablo J. Salvi.</p>
      <Trend
      className='imgFooter'
      smooth
      autoDraw
      autoDrawDuration={3000}
      autoDrawEasing="ease-out"
      data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
      gradient={['#00c6ff', '#F0F', '#FF0']}
      radius={30}
      strokeWidth={12}
      strokeLinecap={'round'}
      />
    </footer>
  );
}

export default BudgetFooter;