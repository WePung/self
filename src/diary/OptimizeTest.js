import React, { useEffect, useState } from 'react';

const CounterA = React.memo(
    ({count}) =>{
        useEffect(()=>{
            console.log(`CounterA UpDate:${count}`)
        })
        return <div>{count}</div>
    }
);

const CounterB = ({object}) =>{
        useEffect(()=>{
            console.log(`CounterB UpDate:${object.count}`)
        });
        return <div>{object.count}</div>
};

const areEqual = (prevProps, nextProps) => {
    if(prevProps.object.count === nextProps.object.count){
        return true;
    }
    return false;
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [object, setObject] = useState({
        count:1
    });

   

    const onCountA = () =>{
        setCount(count);
    };

    const onCountB = () =>{
        setObject({
            count: object.count
        });
    }

    return (
        <div>
            <div>
                <h2>CountA</h2>
                <CounterA count={count}/>
                <button onClick={onCountA}>A 버튼</button>
            </div>
            <div>
                <h2>CountB</h2>
                <MemoizedCounterB object={object}/>
                <button onClick={onCountB}>B 버튼</button>
            </div>
        </div>
    );
};

export default OptimizeTest;