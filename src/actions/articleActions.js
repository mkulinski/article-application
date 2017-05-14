import * as types from '../constants/articleActionTypes';


export function errorLoadingArticles() {
  return {
    type: types.ERROR_LOADING_ARTICLES,
  };
}

export function requestArticles() {
  return {
    type: types.REQUEST_ARTICLES,
  };
}

export function loadArticles(allArticles) {
  return {
    type: types.LOAD_ARTICLES,
    payload: { allArticles },
  };
}

export function fetchArticles() {
  return (dispatch) => {
    dispatch(requestArticles);

    fetch('https://medcircle-coding-project.s3.amazonaws.com/api/articles.json')
      .then(response => {
        return !response.ok ? dispatch(errorLoadingArticles) : response;
      })
      .then(response => response.json())
      .then(articles => dispatch(loadArticles(articles)))
      .catch(() => dispatch(errorLoadingArticles));
  };
}
