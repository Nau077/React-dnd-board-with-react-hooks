import React, { useState } from 'react';
import CardInfo from './CardPopup/CardInfo';
import '../../styles/Main.css';

function Card(props) {

    const [ isShowInfo, setIsShowInfo] = useState(null);

    const closeCardInfoHandler = () => {
 
        setIsShowInfo(null);
 
    };

    const showCardInfoHandler = () => {

        setIsShowInfo(true);

    };

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('cardId', `{"target": "${target.id}", "id": "${props.id}", "type": "${props.type}", "title": "${props.title}", "board_id": "${props.boardId}" }`);

    };

    const dragOver = e => {

        e.stopPropagation();

    };



    return (
        <div>
            <div
                onClick={ showCardInfoHandler }
                id={props.id}
                className={props.className}
                draggable={props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
            >
                <p>{props.title}</p> 
        
            </div>
            {isShowInfo &&
    <CardInfo closeCardInfoHandler={ closeCardInfoHandler } card_id ={props.id} card_title={props.title} board_name={props.board_name}/>
            }       
        </div>
    );
}

export default Card;
