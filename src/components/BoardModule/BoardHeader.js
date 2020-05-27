import React, { useState } from 'react';
import AddCardPopup from './BoardPopup/AddCardPopup';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/Main.css';


function BoardHeader( { canBeAdded, boardName, boardId, type, colorBg } ) {

    const [ isShow, setIsShow ] = useState(null);

    const setPopupValue = () => {
        
        setIsShow(null);
            
    };

    const showPopup = () => {

        setIsShow(true);

    };

    const style_circle = {
        background: colorBg,
    };

    return (
        <div className="boardheader">
            <div className="boardheader__body">
                <div className="titlebody">
                    <div className="circle" style={style_circle}></div>
                    <p>{boardName}</p>
                </div>
                {canBeAdded &&
                    <AddIcon  onClick={ showPopup}/>
                }
               
            </div>
            {isShow &&
        <AddCardPopup setPopupValue={setPopupValue } boardId={boardId} type={type}/>
            }
        </div>
    );
}

export default BoardHeader;
