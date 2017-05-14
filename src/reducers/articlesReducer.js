import {
  REQUEST_ARTICLES,
  LOAD_ARTICLES,
  ERROR_LOADING_ARTICLES,
} from '../constants/actionTypes';
import initialState from './initialState';


export default function articlesReducer(state = initialState.articles, action) {

  switch (action.type) {
    case REQUEST_ARTICLES: {
      console.log('request fired');
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    }

    case LOAD_ARTICLES: {
      console.log('load fired');
      const allArticles = action.payload.allArticles.data;
      return {
        ...state,
        isFetching: false,
        error: false,
        allArticles,
      };
    }

    case ERROR_LOADING_ARTICLES: {
      console.log('error fired');
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    }

    default:
      return state;
  }
}
