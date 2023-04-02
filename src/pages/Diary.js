import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { DiaryStateContext } from '../App';
import MyHeader from '../componet/MyHeader';
import MyButton from '../componet/MyButton';

import { getStringDate } from '../util/date.js';
import { emotionList } from '../util/emotion';



const Diary = () => {
    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);
    const navigate = useNavigate();
    const [data, setData] = useState();

    useEffect(()=>{
        const targetDiary = diaryList.find(
            (it) => parseInt(it.id) === parseInt(id)
        );
        if(targetDiary){
            setData(targetDiary);
        }else{
            alert("없는 일기입니다.");
            navigate("/",{replace:true});
        }
    },[id, diaryList]);

    if(!data){
        return <div className='DiaryPage'>로딩중입니다...</div>;
    }else{

        const curEmotionDate = emotionList.find((it)=> parseInt(it.emotion_id) === parseInt(data.emotion))
        console.log(curEmotionDate)

    return (
        <div className='DiaryPage'>
            <MyHeader
            leftChild = {<MyButton
                            text={"< 뒤로가기"}
                            onClick={()=>navigate(-1)}
                        />}
            headText={`${getStringDate(new Date(data.date))} 기록`}
            rightChild={<MyButton
                            type={"positive"}
                            text={"수정하기"}
                            onClick={()=>navigate(`/edit/${data.id}`)}
                        />}
            />
            <div>
                <article>
                    <section>
                        <h4>오늘의 감정</h4>
                        <div className={['diary_img_wrapper',
                        `diary_img_wrapper_${data.emotion}`,
                    ].join(" ")
                        }>
                            <img src={curEmotionDate.emotion_img} />
                            <div className='emotion_descript'>
                                {curEmotionDate.emotion_dscript}
                            </div>
                        </div>
                        <h4>오늘의 일기</h4>
                    <div className='diary_contnet_wrapper'>
                        <p>{data.content}</p>
                    </div>
                    </section>
                </article>
            </div>
        </div>
    );
    }
};

export default Diary;