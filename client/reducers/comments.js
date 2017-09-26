// 1. akcja (co sie stało)
// 2. kopia stanu
// To tu są przekierowane akcje z actionCreator !
import ACTIONS from '../static/actionsTypes';

function postComments(state = [], action) {
    switch(action.type) {
        case ACTIONS.ADD_COMMENT:
            console.log(action)
            return [...state,
                {...state[action.postId],
                    user: action.author,
                    text: action.comment
                }
            ];
            break;
        case ACTIONS.REMOVE_COMMENT:
            let newState = state.filter(obj => {
                return obj != state[action.i]
            });
            return [...newState];
            break;
        default: return state
    }
}

function comments(state = [], action) {
    return {
        ...state,
        [action.postId]: postComments(state[action.postId], action)
    }
}

export default comments;