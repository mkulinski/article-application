import * as types from '../constants/topicActionTypes';


export function errorLoadingTopics() {
  return {
    type: types.ERROR_LOADING_TOPICS,
  };
}

export function requestTopics() {
  return {
    type: types.REQUEST_TOPICS,
  };
}

export function loadTopics(allTopics) {
  return {
    type: types.LOAD_TOPICS,
    payload: { allTopics },
  };
}

export function fetchTopics() {
  return (dispatch) => {
    dispatch(requestTopics);

    fetch('https://medcircle-coding-project.s3.amazonaws.com/api/topics.json')
      .then(response => {
        return !response.ok ? dispatch(errorLoadingTopics) : response;
      })
      .then(response => response.json())
      .then(topics => dispatch(loadTopics(topics)))
      .catch(() => dispatch(errorLoadingTopics));
  };
}

export function unFollowTopic(id) {
  return {
    type: types.UNFOLLOW_TOPIC,
    payload: { id },
  };
}
