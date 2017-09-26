// 1. akcja (co sie stało)
// 2. kopia stanu
import ACTIONS from '../static/actionsTypes';

function posts(state = [], action) {
    switch (action.type) {
        case ACTIONS.INCREMENT_LIKES:
            const i = action.index;
            const element = state.find(element => {
               return element.likes === action.index
            });
            // tu zmieniamy stan postu
            return [
                ...state.slice(0, i), // wytnij wszystko do szukanego postu
                {...element, likes: element.likes++}, // update odnalezionego postu
                ...state.slice(i + 1) // wytnij wszystko po wyszukanym poscie
            ];
            break;
        default: return state;
    }
    // return state;
}

export default posts;