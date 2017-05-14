import * as types from '../constants/topicActionTypes';
import initialState from './initialState';


export default function topicReducer(state = initialState.topics, action) {
  switch (action.type) {
    case types.REQUEST_TOPICS: {
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    }

    case types.LOAD_TOPICS: {
      const allTopics = action.payload.allTopics.data;
      return {
        ...state,
        isFetching: false,
        error: false,
        allTopics,
      };
    }

    case types.ERROR_LOADING_TOPICS: {
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    }

    case types.UNFOLLOW_TOPIC: {
      const id = action.payload.id;
      const topicsUnFollowed = state.topicsUnFollowed.indexOf(id) === -1 ?
        state.topicsUnFollowed.concat(id) :
        state.topicsUnFollowed.filter(idInArray => idInArray !== id);
      return {
        ...state,
        topicsUnFollowed,
      };
    }

    default:
      return state;
  }
}
