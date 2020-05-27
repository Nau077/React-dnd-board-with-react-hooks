export default function(state, action) {
    switch (action.type) {
      case 'UPDATE_CARDS':
        return state.map(board => {

            if (board.id === action.payload.board_old_id) {
                const cardIndex = board.cards.findIndex(card => card.id === action.payload.card_id);

                board.cards.splice(cardIndex, 1);	

            }

            if (board.id === action.payload.board_new_id) {

                board.cards.push(action.payload.card);

            }
            return board;
        });
      case 'ADD_CARD':
       return state.map(board => {

            if (board.id === action.payload.board_id) {

                board.cards.push(action.payload.card);
            }
            
            return board;
        });

      default:
        return state;
    }
}