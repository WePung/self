import React, { useContext } from 'react';
import { themeContext } from './App';

const Sub3 = () => {
  const theme = useContext(themeContext);
  return (
    <div className='root'style={theme}>
      <h1>Sub3</h1>
    </div>
  );
};

export default Sub3;