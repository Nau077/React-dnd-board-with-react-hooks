
import React from 'react';
import '../../../styles/Popup.css';
import '../../../styles/Main.css';

function CardInfo( props ) {

    const closePopupNoPropagation = e => {

        e.stopPropagation();

    };

    const closePopup = () => {

        props.closeCardInfoHandler();

    };

    return (
        <div 
            className="popup-container" 
            onClick={closePopup}
        >
            <div className="popup-content"
    
                onClick={closePopupNoPropagation}
            >
                <div className="header">
                    <form>
                        <main>
                            <h2>Подробная информация о задаче:</h2>
                            <div className="text-wrapper">
                                <p> Этап задачи: {props.board_name}</p>
                                <p> Текст задачи: {props.card_title}</p>
                            </div>
                            <div className="close-wrapper">
                                <button 
                                    onClick={closePopup}
                                >Закрыть</button>
                            </div>
                        </main>
                    </form>
                </div>
            </div>  
        </div>
    );
}

export default CardInfo;
