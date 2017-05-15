import * as types from '../constants/articleActionTypes';
import initialState from './initialState';


export default function articleReducer(state = initialState.articles, action) {
  switch (action.type) {
    case types.REQUEST_ARTICLES: {
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    }

    case types.LOAD_ARTICLES: {
      const allArticles = action.payload.allArticles.data;
      return {
        ...state,
        isFetching: false,
        error: false,
        allArticles,
      };
    }

    case types.ERROR_LOADING_ARTICLES: {
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
