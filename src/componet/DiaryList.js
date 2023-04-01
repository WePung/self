import React,{useState} from 'react';

const sortOptionList = [
    {
        value:"lastest",
        name : "최신순", 
    },
    {
        value:"oldest",
        name : "오래된 순", 
    }
]

const ControlMenu = ({value, onChange, optionList}) =>{
    return(
        <select
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        >
            {optionList.map((it, idx)=>
            <option key={idx}>
                {it.name}
            </option>
            )
            }
        </select>
    )
}

const DiaryList = ({diaryList}) => {

    const [sortType, setSortType] = useState("lastest");

    const getProcessedDiaryList = () => {
        const compare = (a, b)=>{
            if(sortType === "lastest"){
                console.log("h1")
                return parseInt(b.date) - parseInt(a.date);
            }else{
                console.log("h2")
                return parseInt(a.date) - parseInt(b.date);
            }
        };

        const copyList = JSON.parse(JSON.stringify(diaryList)) // JSON.stringigy()안의 값을 JSON화 시켜 문자열로 반환 후 JSON.parse를 통해 복구를 함 즉 값만 저장됨
        const sortedList = copyList.sort(compare); // sort()는 배열 정렬하는 함수
        return sortedList;
    };

    return (
        <div>
            <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
            />
            {getProcessedDiaryList().map((it)=>(
            <div key = {it.id}>
                {it.content}
            </div>
        ))}
        </div>
    );
};

DiaryList.defaultPorps = {
    diaryList: []
}

export default DiaryList;