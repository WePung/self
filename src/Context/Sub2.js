import React,{useContext} from 'react';
import Sub3 from './Sub3';
import { themeContext } from './App';

const Sub2 = () => {
  const theme = useContext(themeContext);
  return (
    <div className='root' style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
};

export default Sub2;