import { handleActions } from "redux-actions";
import api from "api";
import { loop, Cmd } from "redux-loop";
import {
  fetchRecentLaunchesSuccessAction,
  fetchRecentLaunchesFailureAction
} from "../actions";

import {
  FETCH_RECENT_LAUNCHES_REQUEST,
  FETCH_RECENT_LAUNCHES_FAILURE,
  FETCH_RECENT_LAUNCHES_SUCCESS,
  CLEAR_STORE
} from "../actions/types";

const initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};

const reducerMap = {
  [FETCH_RECENT_LAUNCHES_REQUEST]: (state, { payload }) => {
    if (state && (!state.isFetching && !state.isFetched && !state.isFailed)) {
      return loop(
        {
          ...state,
          isFetched: false,
          isFetching: true,
          isFailed: false
        },
        Cmd.run(api.getRecentLaunches, {
          successActionCreator: fetchRecentLaunchesSuccessAction,
          failActionCreator: fetchRecentLaunchesFailureAction,
          args: [payload]
        })
      );
    }

    return state;
  },
  [FETCH_RECENT_LAUNCHES_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetched: true,
      isFetching: false,
      isFailed: false,
      data: action.payload.data
    };
  },
  [FETCH_RECENT_LAUNCHES_FAILURE]: (state) => {
    return {
      ...state,
      isFetched: false,
      isFetching: false,
      isFailed: true
    };
  },
  [CLEAR_STORE]: () => initialState
};

export default handleActions(reducerMap, initialState);
