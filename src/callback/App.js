import { useState } from 'react';

function App() {
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

  const callback = (elemnet) =>{
    if(elemnet.length > 6){
      return true;
    }else{
      return false;
    }
  }

  const newWords = words.filter(callback);
  console.log(newWords);

  return (
    <div className="App">
    </div>
  );
}

export default App;
