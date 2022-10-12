import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext.js';

function Budget() {
  const { userName } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userName === '') navigate('/login');
  }, []); // eslint-disable-line

  return (
    <div>Budget</div>
  );
}

export default Budget;