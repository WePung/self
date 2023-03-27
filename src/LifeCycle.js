import React,{useEffect, useState} from "react";

const LifeCycle = () =>{
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const onPlus = () =>{
        setCount(count+1);
    }

    const onText = (e) =>{
        setText(e.target.value)
    }

    useEffect(()=>{
        console.log("Mount!")
    },[])

    return(
        <div>
            <div>

                <button onClick={onPlus}>증가</button>
                {count}
            </div>
            <div>
                <input value={text} onChange = {onText}></input>
            </div>
        </div>
    )
}

export default LifeCycle;