import { LOAD_ARTICLES } from '../constants/actionTypes';
import initialState from './initialState';


export default function articlesReducer(state = initialState.articles, action) {

  switch (action.type) {
    case LOAD_ARTICLES: {
      const articles = action.payload.articles
      return Object.assign({}, state, { articles });
    }

    default:
      return state;
  }
}
