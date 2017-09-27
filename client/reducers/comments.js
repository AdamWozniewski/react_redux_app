// 1. akcja (co sie stało)
// 2. kopia stanu
// To tu są przekierowane akcje z actionCreator !
import ACTIONS from '../static/actionsTypes';

function postComments(state = [], action) {
    switch(action.type) {
        case ACTIONS.ADD_COMMENT:
            return [
                ...state, {
                        user: action.author,
                        text: action.comment
                    }
            ]
        case ACTIONS.REMOVE_COMMENT:
            const newState = state.filter(obj => {
                return obj !== state[action.i]
            });
            return [...newState];
        default: return state
    }
}

// Można tak robić, ale to źle
function comments(state = {}, action) {
    return {
        ...state,
        [action.postId]: postComments(state[action.postId], action)
    }
}

export default comments;