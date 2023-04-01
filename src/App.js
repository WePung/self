import React, { useState, useReducer, useRef } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyHeader from './componet/MyHeader.js'

import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'


const reducer = (state, action) =>{
  let newState = [];
  switch(action.type){
    case 'INIT':{
      return action.data
    }
    case 'CREATE':{
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE':{
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case 'EDIT':{
      newState = state.map((it)=>it.id === action.data.id ? {...action.data}: it);
      break;
    }
    default:
      return state;
  }
  return newState;
}

const dummyData = [
  {
    id:1,
    emotion:1,
    content:"오늘의 1번",
    date:1680340152168
  },
  {
    id:2,
    emotion:3,
    content:"오늘의 2번",
    date:1680340213916
  },
  {
    id:3,
    emotion:4,
    content:"오늘의 3번",
    date:1680340221311
  },
  {
    id:4,
    emotion:2,
    content:"오늘의 4번",
    date:1680340226234
  },
  {
    id:5,
    emotion:5,
    content:"오늘의 5번",
    date:1680340231891
  }
];



export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {

  console.log(new Date().getTime());

  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

    // CREATE
    const onCreate = (date, content, emotion) =>{
      dispatch({type:"CREATE", data:{
        id : dataId.current,
        data: new Date(date).getTime(),
        content,
        emotion
      }
    })
    dataId.current += 1;
    }

    // REMOVE
    const onRemove = (targetId)=>{
      dispatch({type:"REMOVE", targetId});
    }

    // EDIT
    const onEdit = (targetId, date, content, emotion)=>{
      dispatch({type:"EDIT", data:{
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }})
    }

  return (
    <DiaryStateContext.Provider value = {data}>
      <DiaryDispatchContext.Provider value = {{onCreate, onEdit, onRemove}}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path = "/new" element ={<New />} />
          <Route path = "/edit" element ={<Edit />} />
          <Route path = "/diary/:id" element ={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;