import React, {useState, useEffect, useRef} from "react";


const DiaryEditor = ({onCreate}) =>{

    const authorInput = useRef();
    const contentInput = useRef();
    const [state, setState] = useState([{
        author:"",
        content:"",
        emotion: 1
    }]);
    const[author, setAuthor] = useState("");
    const[content, setContent] = useState("");
    const[emotion, setEmotion] = useState("");

    const handleAuthor = (e) =>{
        setAuthor(e.target.value)
        const {name, value} = e.target
        setState({...state, [name]: value})
    }
    const handleContent = (e) =>{
        setContent(e.target.value)
        const {name, value} = e.target
        setState({...state, [name]: value})
    }
    const handleEmotion = (e) =>{
        setEmotion(e.target.value)
        const {name, value} = e.target;
        setState({...state, [name]: value})
    }
   

    const onSave = () =>{
        if(state.author === undefined){
            authorInput.current.focus();
            return;
        }if(state.content === undefined){
            contentInput.current.focus();
            return;
        }else{
            onCreate(state.author, state.content, state.emotion)
            alert("성공");
            setAuthor("");
        setContent("");
        setEmotion("");
        }
    }

    const onReset =()=>{
        setAuthor("");
        setContent("");
        setEmotion("");
    }
return(
    <div>
        <h2>오늘의 일기</h2>
            <input
                 ref={authorInput}
                  id = "author"
                  name = "author"
                  type="text"
                  value={author}
                onChange={handleAuthor}
            />
            <textarea
             ref={contentInput}
                id="content"
                type = "text"
                name = "content"
                value={content}
                onChange={handleContent}
            />
            <select
                name="emotion"    
                value={emotion}
                onChange={handleEmotion}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button
                onClick={onSave}>저장
                </button>
            <button
                type= "reset"
                onClick={onReset}
                >초기화</button>
    </div>
    )
}

export default DiaryEditor;