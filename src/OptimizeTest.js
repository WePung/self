import React, { useEffect, useState } from 'react';

const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [text, setText] = useState("");

    const onCount = () =>{
        setCount(count+1);
    }
    const onText = (e) =>{
        setText(e.target.value);
    }
    const CountView = ({count})=>{
        useEffect(()=>{
            console.log(count);
        },[])
        return <div>{count}</div>
    }
    const TextView = ({text})=>{
        useEffect(()=>{
            console.log(text);
        },[])
        return <div>{text}</div>
    }

    

    return (
        <div>
            <h2>Count</h2>
            <CountView count={count}/>
            <button onClick={onCount}>증가</button>
            <h2>Text</h2>
            <TextView text={text}/>
            <input type={text} value={text} onChange={onText}></input>
        </div>
    );
};

export default OptimizeTest;