import { handleActions } from 'redux-actions';

import {
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_FAILURE,
  FETCH_MISSIONS_SUCCESS,
  CLEAR_STORE
} from '../actions/types'

const initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
}

const reducerMap = {
  [FETCH_MISSIONS_REQUEST]: (state) => {
    return {
      ...state,
      isFetched: false,
      isFetching: true,
      isFailed: false,
    }
  },
  [FETCH_MISSIONS_SUCCESS]: (state,action) => {
    return {
      ...state,
      isFetched: true,
      isFetching: false,
      isFailed: false,
      data: action.payload,
    }
  },
  [FETCH_MISSIONS_FAILURE]: (state) => {
    return {
      ...state,
      isFetched: false,
      isFetching: false,
      isFailed: true,
    }
  },
  [CLEAR_STORE]: () => initialState
}

export default handleActions(reducerMap,initialState)