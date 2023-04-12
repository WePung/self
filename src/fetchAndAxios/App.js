import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  const[todoList, setTodoList] = useState([{}]);
  const[inputText, setInputText] = useState("");
  const[isDone, setIsDone] = useState(false);

  const url = 'http://localhost:4000/api/todo';

  const fetchData = async() => {
    const res = await axios.get(url)
    setTodoList(res.data);
  }

  const handleInputText=(e)=>{
    setInputText(e.target.value);
  }

  const onDone = ()=>{
    if(!isDone){
      setIsDone(true)
    }else{
      setIsDone(false);
    }
  }

  const onSubmitHandle = async () =>{
   const text = inputText;
   const done = isDone;
   await axios.post(url, {text, done})
   fetchData();
    // fetch('http://localhost:4000/api/todo',
    // {
    //   method :'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body : JSON.stringify({
    //   text,
    //   done
    // })}
    // )
  }
 
  useEffect(()=>{
    fetchData();
    // fetch('http://localhost:4000/api/todo')
    // .then((res)=>res.json())
    // .then((data)=>setTodoList(data));
  }, [])

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form
        onSubmit={onSubmitHandle}
      >
        <input 
        type="text"
        name = "inputText"
        value={inputText}
        onChange={handleInputText}
        />
        <input
        type="checkbox"
        name = "isDone"
        onClick={onDone}
        />
        <button
        type="submit"
        >추가</button>
      </form>
      {todoList.map((todo)=>(
        <div className="todo" key={todo.id} style={{border:"1px solid black"}}>
        <div>아이디 :{todo.id}</div>
        <div>오늘의 할 일 :{todo.text}</div>
        <div>완료 여부 :{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;