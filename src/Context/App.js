import React,{createContext, useContext} from 'react';
import "./App.css"
import Sub1 from './Sub1';

const themeDefault = {border:"10px solid green"};

export const themeContext = createContext(themeDefault); // createContext()에 첫번째 인자는 생성한 Context의 기본값이 됨, 다른 컴포넌트에서도 사용하려면 export해야함

const App = () => {
  const theme = useContext(themeContext);
  return (
    <div className='root'style={theme}>
      <h1>Hello</h1>
      <Sub1 />
    </div>
  );
};

export default App;