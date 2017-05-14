import {
  REQUEST_TOPICS,
  LOAD_TOPICS,
  ERROR_LOADING_TOPICS,
} from '../constants/topicActionTypes';
import initialState from './initialState';


export default function topicReducer(state = initialState.topics, action) {

  switch (action.type) {
    case REQUEST_TOPICS: {
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    }

    case LOAD_TOPICS: {
      const allTopics = action.payload.allTopics.data;
      return {
        ...state,
        isFetching: false,
        error: false,
        allTopics,
      };
    }

    case ERROR_LOADING_TOPICS: {
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
