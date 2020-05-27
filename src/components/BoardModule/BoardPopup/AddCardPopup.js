
import React, { useState, useContext }  from 'react';
import { Context } from '../../../context';
import * as uuid from "uuid";
import '../../../styles/Popup.css';
import '../../../styles/Main.css';

function AddCardPopup( props ) {

    const { dispatch } = useContext(Context);

    const [cardTitle, setCardTitle] = useState('');

    const createCard = e => {
        
        if (e) {
            e.preventDefault();
        }

        if (cardTitle.length) {
            dispatch({
                type: 'ADD_CARD',
                payload: {
                    board_id: props.boardId,
                    card: {
                        title: cardTitle,
                        id: uuid.v4(),
                        type: props.type,
                        draggable:"true",
                        className:"card"
                    }
                }
            });
        
            setCardTitle('');
            props.setPopupValue();
            
        }
    };

    const createCardByEnter = e => {

        if (e.key === 'Enter' && cardTitle.length) {

            dispatch({
                type: 'ADD_CARD',
                payload: {
                    board_id: props.boardId,
                    card: {
                        title: cardTitle,
                        id: uuid.v4(),
                        type: props.type,
                        draggable:"true",
                        className:"card"
                    }
                }
            });

            setCardTitle('');
            props.setPopupValue();

        }
    };

    const closePopupNoPropagation = e => {
        e.stopPropagation();
        
    };

    const closePopup = () => {

        props.setPopupValue();
    };
    return (
        <div 
            className="popup-container" 
            onClick={closePopup}
        >
            <div className="popup-content"
        
                onClick={closePopupNoPropagation}
            >
                <div className="create-wrapper">
                    <h2>Введите заголовок карточки:</h2>
                            <input
                                type="text" 
                                value={cardTitle}
                                onKeyPress={createCardByEnter}
                                onChange={event => setCardTitle(event.target.value)}
                            /> 
                            <div className="close-wrapper">
                                <button 
                                    onClick={closePopup}
                                >Закрыть</button>
                                <button
                                    onClick={createCard}
                                >Cоздать карточку</button>
                            </div>
                    </div>
                </div>
            </div>
    );
}

export default AddCardPopup;
