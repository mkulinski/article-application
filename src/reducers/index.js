import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import topicReducer from './topicReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  articles: articleReducer,
  topics: topicReducer,
  routing: routerReducer
});

export default rootReducer;
