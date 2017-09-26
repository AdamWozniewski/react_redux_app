import ACTIONS from '../static/actionsTypes';

// Te akcje są dostępne w CAŁEJ aplikacji !

// increment serca
export function increment(index) {
    return {
        type: ACTIONS.INCREMENT_LIKES,
        index,
    }
}

// dodaj komentarz
export function addComment(postId, author, comment) {
    return {
        type: ACTIONS.ADD_COMMENT, postId, author, comment
    }
}

// usun komentarz
export function removeComment(postId, i) {
    return {
        type: ACTIONS.REMOVE_COMMENT, i, postId
    }
}
