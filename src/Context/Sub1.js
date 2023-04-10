import React,{createContext, useContext} from 'react';
import Sub2 from './Sub2';
import { themeContext } from './App'; // export한 Context를 사용하여면 이러한 방식으로 import를 해야함

const Sub1 = () => {
  const theme = useContext(themeContext);
  return (
    // 어떠한 이유로 sub2하위컴포넌트를 바꾸고 싶다면 sub2의 부모 컴포넌트를 Context.Provider로 감싸준다. Provider은 value값이 필요하다.
    <themeContext.Provider value={{border : '10px solid blue'}}>
    <div className='root' style={theme}>
      <h1>Sub1</h1>
      <Sub2 />
    </div>
    </themeContext.Provider>
  );
};

export default Sub1;