import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyHeader from './MyHeader';
import MyButton from './MyButton';
import EmotionItem from './EmotionItem';
import { DiaryDispatchContext } from './../App.js';
import { emotionList } from '../util/emotion';

const getStringDate = (date) =>{
    return date.toISOString().slice(0, 10); // toISOSring은 date객체를 받아 yyyy-mm-ddthh형태로 나타내줌
}

const DiaryEditor = ({isEdit, originData}) => {

    const [date, setDate] = useState(getStringDate(new Date()));
    const [emotion, setEmotion] = useState(3);
    const [content, setContnet] = useState("");
    const contentRef =useRef();
    const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchContext);

    const onInputTextArea = (e) => {
        setContnet(e.target.value);
    }

    const handleSubmit = () =>{
        if(content.length < 1){
            contentRef.current.focous();
            return;
        }
        if(window.confirm(isEdit ? "일기를 수정하시겠습니까?" : "일기를 작성하시겠습니까?")){
            if(!isEdit){
                onCreate(date, content, emotion);
                navigate('/',{replace:true});
            }else{
                onEdit(originData.id, date, content, emotion);
            }
        }
        navigate('/',{replace:true});
    }

    const handleRemove = () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            onRemove(originData.id);
            navigate('/',{replace:true});
        }
    }

    const handleClickEmote = (emotion) => {
        setEmotion(emotion);
    }

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    
    useEffect(()=>{
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContnet(originData.content);
        }
    },[isEdit, originData])

    return (
        <div className='DiaryEditor'>
        <MyHeader
        leftChild={<MyButton 
                    onClick={goBack}
                    text={"< 뒤로가기"}
                    />}
        headText = {isEdit ? "일기 수정하기" : "새로운 일기 쓰기"}
        rightChild={
        isEdit && (
        <MyButton
        type={"negative"}
        text={"삭제하기"}
        onClick={handleRemove}
        />)}
        />
        <div>
            <section>
                <h4>오늘은 언제 인가요?</h4>
                <div className='input_box'>
                    <input
                    className='input_date'
                    value = {date}
                    onChange={(e)=>setDate(e.target.value)}
                    type='date' />
                </div>
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className='input_box emotion_list_wrapper'>
                    {emotionList.map((it)=>(
                        <EmotionItem key={it.emotion_id} {...it}
                        onClick = {handleClickEmote}
                        isSelected = {it.emotion_id === emotion}
                        />
                ))}
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className='input_box_text_wrapper'>
                    <textarea
                     ref={contentRef}
                     value={content}
                     onChange={onInputTextArea}
                     placeholder='오늘은 어땠나요?'
                    />
                </div>
            </section>
            <section>
                <div className='control_box'>
                    <MyButton
                        text={"취소하기"}
                        onClick={goBack}
                    />
                    <MyButton
                        type={"positive"}
                        text={"작성 완료"}
                        onClick ={handleSubmit}
                    />
                </div>
            </section>
        </div>
           
    </div>
    );
};

export default DiaryEditor;