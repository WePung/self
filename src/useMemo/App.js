import React, { useState, useMemo } from 'react';
import "./App.css"

const calculate = (number) => {
  console.log("딜레이1");
  for(let i = 0; i < 999999999; i++){}
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log("딜레이2");
  return number + 1;
}

const App = () => {

  const [hardCalculate, setHardCalculate] = useState(1);
  const [speedCalculate, setSpeedCalculate] = useState(1);

  // const memosum = calculate(hardCalculate); useMemo를 사용안할시 easyCalculate를 호출하면 calculate도 같이 호출되 쓸데없는 렌더링이 됨
  const speedSum = easyCalculate(speedCalculate);
  const memoSum = useMemo(()=>{ return calculate(hardCalculate)},[hardCalculate])

  return (
    <div className='App'>
       <input
      type="number"
      value={hardCalculate}
      onChange={(e)=>{setHardCalculate(parseInt(e.target.value))}}
      />
      <span>+ 10000 = {memoSum}</span>
      <input
      type="number"
      value={speedCalculate}
      onChange={(e)=>{setSpeedCalculate(parseInt(e.target.value))}}
      />
      <span>+ 1 = {speedSum}</span>
    </div>
  );
};

export default App;