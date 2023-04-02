import React, { useState, useReducer, useRef, useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

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

  localStorage.setItem('diary', JSON.stringify(newState));
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);

  // useEffect(()=>{
    // localStorage.setItem('key', 10); // 로컬스토리지에 key값은 key 이고 value는 10으로 setItem으로 저장해라
    // localStorage.setItem('item3', JSON.stringify({value : 30})); // 로컬스토리지에 객체는 JSON.sringify를 사용해 직렬화 해야함
  
    // const item1 = localStorage.getItem('item1'); // 저장은 number로 했지만 불러오면 문자열로 바뀜
    // const item2 = localStorage.getItem('item2');
    // const item3 = JSON.parse(localStorage.getItem('item3')); // 그래서 JSON.parse()를 이용해 꺼내야 함

    // console.log({item1, item2, item3})
  // },[])
  useEffect(()=>{
    const localData = localStorage.getItem('diary');
    if(localData){
      const diaryList = JSON.parse(localData).sort(
        (a,b) => parseInt(b.id) - parseInt(a.id)
      );

      dataId.current = parseInt(diaryList[0].id) + 1;

      dispatch({type:"INIT", data: diaryList});
    }
  }, [])


  const dataId = useRef(0);

    // CREATE
    const onCreate = (date, content, emotion) =>{
      dispatch({
        type:"CREATE",
        data:{
        id : dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion
      },
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
          <Route path = "/edit/:id" element ={<Edit />} />
          <Route path = "/diary/:id" element ={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;