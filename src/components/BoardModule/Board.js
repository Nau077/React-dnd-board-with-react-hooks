import React, { useContext } from 'react';
import Card from '../CardModule/Card';
import BoardHeader from './BoardHeader';
import { Context } from '../../context';
import '../../styles/Main.css';

function Board({ id, className, cards, type, canBeAdded, boardName, color }) {

    const { dispatch } = useContext(Context);

    const drop = e => {

        e.preventDefault();

        const target = e.dataTransfer.getData('cardId');
        const target_parsed = JSON.parse(target);

        if (!target_parsed) return;

        function isDifferMoreOne(board_type, card_type) {
            const is_right_differ = true;
            const is_wrong_differ = false;

            if (board_type - card_type == 1 || board_type - card_type == -1) return is_right_differ;

            return is_wrong_differ;
        }
	
        if (type == target_parsed.type  || isDifferMoreOne(type, target_parsed.type)) {

            dispatch({
                type: 'UPDATE_CARDS',
                payload: {
                    board_old_id: target_parsed.board_id,
                    card_id: target_parsed.id,
                    card_type: type,
                    board_new_id: id,
                    card: {
                        id: target_parsed.id,
                        className: "card",
                        draggable: "true",
                        type: type,
                        title: target_parsed.title
                    }
                }
            });
        }

    };

    const dragOver = e => {

        e.preventDefault();

    };

    return (
        <div className="boardwrapper">
                <BoardHeader canBeAdded={canBeAdded} boardName={boardName} boardId={id} type={type} colorBg={color}/>
            <div
                id={id}
                className={className}
                onDrop={drop}
                onDragOver= {dragOver}
            >
                {cards && cards.map(item => <Card key={item.id } {...item } boardId={id} board_name={boardName}/>)}
            </div>
        </div>
    );
}

export default Board;
