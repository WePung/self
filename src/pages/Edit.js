import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import DiaryEditor from '../componet/DiaryEditor';

const Edit = () => {

    const navigate = useNavigate(); // 링크 태그를 클릭 안해도 의도적으로 페이지 변경할 수 있음
    const [originData, setOriginData] = useState();
    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);

    useEffect(()=>{
        if(diaryList.length >= 1){
            const targetDiary = diaryList.find(
                (it)=>parseInt(it.id) === parseInt(id)
                );
        if(targetDiary){
            setOriginData(targetDiary);
        }else{
            navigate("/",{replace:true});
        }
    }
    }, [id, diaryList])

    // const [searchParams, setSerchParams] = useSearchParams(); // 이름은 자유로 사용 가능하나 useSearchParams()의 이름은 꼭 지켜야 함

    // const id = searchParams.get('id');
    // console.log("id :", id);

    // const mode = searchParams.get('mode');
    // console.log("mode = ", mode);

    const goHome = () => {
        navigate("/");
    }

    const goPrev = () =>{
        navigate(-1);
    }

    return (
        <div>
            {originData && <DiaryEditor
                            isEdit = {true}
                            originData = {originData}
                            />}
        </div>
    );
};

export default Edit;