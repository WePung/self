import React from 'react';

const EmotionItem = ({emotion_id, emotion_img, emotion_dscript, onClick, isSelected}) => {
    return (
        <div className={['EmotionItem',
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
    ].join(" ")}
        onClick = {() => onClick(emotion_id)}
        >
            <img src={emotion_img} />
            <span>{emotion_dscript}</span>
        </div>
    );
};

export default EmotionItem;