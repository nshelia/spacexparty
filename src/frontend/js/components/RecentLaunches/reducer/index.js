import {
  FETCH_RECENT_LAUNCHES_REQUEST,
  FETCH_RECENT_LAUNCHES_FAILURE,
  FETCH_RECENT_LAUNCHES_SUCCESS,
  CLEAR_STORE
} from '../actions/types'

const initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
}

export default (state = initialState,action) => {
  switch (action.type) {
    case FETCH_RECENT_LAUNCHES_REQUEST: {
      return {
        ...state,
        isFetched: false,
        isFetching: true,
        isFailed: false,
      }
    }
    case FETCH_RECENT_LAUNCHES_SUCCESS: {

      return {
        ...state,
        isFetched: true,
        isFetching: false,
        isFailed: false,
        data: action.payload
      }
    }
    case FETCH_RECENT_LAUNCHES_FAILURE: {
      return {
        ...state,
        isFetched: false,
        isFetching: false,
        isFailed: true,
      }
    }
    case CLEAR_STORE: {
      return initialState
    }
    default: {
      return initialState
    }
  }
}