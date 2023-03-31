import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {

    const [searchParams, setSerchParams] = useSearchParams(); // 이름은 자유로 사용 가능하나 useSearchParams()의 이름은 꼭 지켜야 함

    const navigate = useNavigate(); // 링크 태그를 클릭 안해도 의도적으로 페이지 변경할 수 있음

    const id = searchParams.get('id');
    console.log("id :", id);

    const mode = searchParams.get('mode');
    console.log("mode = ", mode);

    const onQsChange = () =>{
        setSerchParams({who:'winterlood'})
    }

    const goHome = () => {
        navigate("/");
    }

    const goPrev = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 Edit입니다.</p>
            <button onClick={onQsChange}>QS 바꾸기</button>
            <button onClick={goHome}>HOME</button>
            <button onClick={goPrev}>Prev</button>
        </div>
    );
};

export default Edit;