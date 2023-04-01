import React, { useContext, useEffect, useState } from 'react';
import MyHeader from '../componet/MyHeader';
import MyButton from '../componet/MyButton';
import { DiaryStateContext } from '../App';
import DiaryList from '../componet/DiaryList';

const Home = () => {

    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]);

    const [curDate, setCurDate] = useState(new Date());

    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`; // getMonth()함수는 1월을 0으로 표기해 현재 월 표기시 + 1 을 추가

    const increaseMonth = () =>{
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate())
        );
    }
    const decreaseMonth = () =>{
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate())
        );
    }

    useEffect(()=>{
        if(diaryList.length >= 1){
        const firstDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1
        ).getTime();

        const lastDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth()+1,
            0
        ).getTime();

        setData(diaryList.filter((it)=> firstDay <= it.date && it.date <= lastDay))
        }
    },[diaryList, curDate])

    useEffect(()=>{
        console.log(data);
    },[data])

    return (
        <div>
            <MyHeader
            headText={headText}
            leftChild={<MyButton text={'<'} onClick={decreaseMonth}/>}
            rightChild={<MyButton text={'>'} onClick={increaseMonth}/>}
            />
            <DiaryList diaryList={data}/>
        </div>
    );
};

export default Home;