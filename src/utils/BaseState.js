const BASE_STATE =  [
    {
        id: 'board-1',
        type: 1,
        className:'board',
        canBeAdded: true,
        boardName: 'Наряды',
        color: 'grey',
        cards: [
            { id:"card-1", className:"card", draggable:"true", type: 1, title: 'cardOne' },
        ] },
    {
        id: 'board-2',
        type: 2,
        className:'board',
        canBeAdded: false,
        boardName: 'В работе',
        color: 'green',
        cards: [
            { id:"card-2", className:"card", draggable:"true", type: 2, title: 'cardTwo' },
        ]
    },
    {
        id: 'board-3',
        type: 3,
        className:'board',
        canBeAdded: false,
        boardName: 'Приёмка',
        color: 'orange',
        cards: [
            { id:"card-3", className:"card", draggable:"true", type: 3, title: 'cardThree' },
        ]
    },
    {
        id: 'board-4',
        type: 4,
        className:'board',
        canBeAdded: false,
        boardName: 'Завершено',
        color: 'blue',
        cards: [
            { id:"card-4", className:"card", draggable:"true", type: 4, title: 'cardFour' },
        ]
        
    },
];

export default BASE_STATE;
 