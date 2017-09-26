import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, hashHistory } from 'react-router';

// root reducer, głowny start store

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object on the default data

const defaultState = { // nasze dane do przekazania do state
    posts, comments
};

const store = createStore(rootReducer, defaultState); // stawamy store z reduxa


// eksport histri zmian i stanu
export const history = syncHistoryWithStore(browserHistory, store);
// export const history = syncHistoryWithStore(hashHistory);

export default store;