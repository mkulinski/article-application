import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  articles: articlesReducer,
  routing: routerReducer
});

export default rootReducer;
