import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducery - tu są pobierane funkcje do obsługi zdarzen, ktore potem są dostępne dla komponentow
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;