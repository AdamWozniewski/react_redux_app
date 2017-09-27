// 1. akcja (co sie stało)
// 2. kopia stanu
import ACTIONS from '../static/actionsTypes';

function posts(state = [], action) {
    switch (action.type) {
        case ACTIONS.INCREMENT_LIKES:
            const i = action.index;
            const element = state.filter(element => {
                if(element.code === action.postId) {
                    element.likes++;
                }
                return element;
            });
            // tu zmieniamy stan postu
            return [...element];
            break;
        default: return state;
    }
    // return state;
}

export default posts;