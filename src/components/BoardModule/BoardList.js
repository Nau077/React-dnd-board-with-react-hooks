import React from 'react';
import Board from './Board';
import '../../styles/Main.css';

function BoardList({ boards }) {

    return (
        <main className="flexbox">
            {boards && boards.map(item => <Board key={item.id } {...item}/>)}
        </main>
    );
}

export default BoardList;