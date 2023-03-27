
import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import LifeCycle from './LifeCycle';


function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) =>{
    const created_data = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }
  const onRemove = (targetId) =>{
    console.log(`${targetId}가 삭제되었습니다`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
}

const onEdit = (targetId, newContent) =>{
     setData(
      data.map((it)=>it.id === targetId ? {...it, content: newContent} : it)
     );
}


  // const dummyList = [
  //   {
  //     id:1,
  //     author:"이지원1",
  //     content:"내용 1",
  //     emotion:5,
  //     created_data:new Date().getTime()
  //   },
  //   {
  //     id:2,
  //     author:"이지원2",
  //     content:"내용 2",
  //     emotion:5,
  //     created_data:new Date().getTime()
  //   },
  //   {
  //     id:3,
  //     author:"이지원3",
  //     content:"내용 3",
  //     emotion:5,
  //     created_data:new Date().getTime()
  //   }
  // ]
  

  return (
    <div className="App">
      <LifeCycle />
      <DiaryEditor
      onCreate = {onCreate}
      />
      <DiaryList
      diaryList = {data}
      onEdit={onEdit}
      onRemove = {onRemove}

      />
    </div>
  );
}

export default App;
