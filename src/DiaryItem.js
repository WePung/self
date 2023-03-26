import { useRef, useState } from "react";

const DiaryItem = ({id, author, content, emtotion, created_data, onRemove, onEdit}) =>{

    const [isEdit, setIsEdit] = useState(false);

const handleRemove = () =>{
    if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
        onRemove(id);
    }
}

const handleEditToggle = () =>{
    if(!isEdit){
        setIsEdit(true);
        setLocalContent("");
    }if(isEdit){
        setIsEdit(false);
        setLocalContent("");
    }
}

const [localContent, setLocalContent] = useState(content);

const localContentInput = useRef();

const handleEdit = () =>{
    if(localContent === null){
        localContentInput.current.forcus();
        return;
    }
    if(window.confirm(`${id}번째 일기를 정말 수정하시겠습니까?`)){
        onEdit(id, localContent);
        handleEditToggle();
    }
}

    return(
        <div>
            <div>
                <span>작성자 : {author} ㅣ 감정점수 : {emtotion}</span>
                <span>{new Date(created_data).toLocaleDateString()}</span>
                <span>{content}</span>
                {isEdit ? (
                    <div>
                    <textarea value={localContent} onChange = {(e)=>setLocalContent(e.target.value)} ref ={localContentInput}></textarea>
                    <button
                    onClick={handleEdit}
                    >수정 완료</button>
                    <button
                    onClick={handleEditToggle}
                    >수정 취소</button>
                    </div>
                ) : (<div>
                    <button onClick={handleRemove}>삭제</button>
                <button
                onClick={handleEditToggle}
                >수정</button>
                </div>)}
                
            </div>
        </div>
    )
}

export default DiaryItem;