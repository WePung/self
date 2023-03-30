import React, {useState, useEffect, useContext} from "react";
import DiaryItem from "./DiaryItem";
import {DiaryStateContext} from "./App";

const DiaryList = ({onEdit, onRemove}) => {
    const diaryList = useContext(DiaryStateContext);
    return(
        <div>
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it)=>(
                    <DiaryItem 
                    key = {it.id}
                    {...it}
                    onRemove = {onRemove}
                    onEdit = {onEdit}
                />
                ))}
            </div>
        </div>
    )
    
}
DiaryList.defualtProps = {
    diaryList:[]
};

export default DiaryList;