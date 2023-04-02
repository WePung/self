import React,{useState} from 'react';
import MyButton from "./MyButton";
import { useNavigate } from 'react-router-dom';
import DiaryItem from '../componet/DiaryItem';
import { getStringDate } from '../util/date.js';

const sortOptionList = [
    {
        value:'lastest',
        name : "최신순", 
    },
    {
        value:'oldest',
        name : "오래된 순", 
    }
];

const filterOptionList = [
    {
        value : "all",
        name : "전부다"
    },
    {
        value : "good",
        name : "좋은 감정만"
    },
    {
        value : "bad",
        name : "안좋은 감정만"
    }
]

const ControlMenu = ({value, onChange, optionList}) =>{
    return(
        <select
        className='ControlMenu'
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        >
            {optionList.map((it, idx)=>(
            <option
            key={idx}
            value={it.value}
            >
                {it.name}
            </option>
            ))
            }
        </select>
    )
}

const DiaryList = ({diaryList}) => {
    const navigate = useNavigate();

    const [sortType, setSortType] = useState("lastest");
    const [filter, setFilter] = useState("all");

    const getProcessedDiaryList = () => {
        const compare = (a, b)=>{
            if(sortType === "lastest"){
                return parseInt(b.date) - parseInt(a.date);
            }else{
                return parseInt(a.date) - parseInt(b.date);
            }
        };

        const copyList = JSON.parse(JSON.stringify(diaryList)) // JSON.stringigy()안의 값을 JSON화 시켜 문자열로 반환 후 JSON.parse를 통해 복구를 함 즉 값만 저장됨

        const filterCallBack = (item) =>{
            if(filter === "good"){
                return parseInt(item.emotion) >= 3;
            }else{
                return parseInt(item.emotion) < 3;
            }
        }

        const filterdList = filter === "all" ? copyList : copyList.filter((it)=>filterCallBack(it));

        const sortedList = filterdList.sort(compare); // sort()는 배열 정렬하는 함수
        return sortedList;
    };

    return (
        <div className='DiaryList'>
            <div className='menu_wrapper'>
                <div className='left_cal'>
                <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
            />
             <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
            />
                </div>
                <div className='right_cal'>
                <MyButton
            type={"positive"}
            text={"새 일기쓰기"}
            onClick={()=>navigate("/new")}
            />
                </div>
            </div>
            {getProcessedDiaryList().map((it)=>(
            <DiaryItem key={it.id} {...it} />
        ))}
        </div>
    );
};

DiaryList.defaultPorps = {
    diaryList: []
}

export default DiaryList;