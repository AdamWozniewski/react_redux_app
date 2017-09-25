// increment serca
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index,

    }
}

// dodaj komentarz
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT', postId, author, comment
    }
}

// usun komentarz
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT', i, postId
    }
}
