import { handleActions } from "redux-actions";
import api from "api";
import { loop, Cmd } from "redux-loop";
import {
  fetchRoadsterFailureAction,
  fetchRoadsterSuccessAction
} from "../actions";

import {
  FETCH_ROADSTER_REQUEST,
  FETCH_ROADSTER_FAILURE,
  FETCH_ROADSTER_SUCCESS,
  CLEAR_STORE
} from "../actions/types";

const initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};

const reducerMap = {
  [FETCH_ROADSTER_REQUEST]: (state) => {
    if (state && (!state.isFetching && !state.isFetched && !state.isFailed)) {
      return loop(
        {
          ...state,
          isFetched: false,
          isFetching: true,
          isFailed: false
        },
        Cmd.run(api.getRoadster, {
          successActionCreator: fetchRoadsterSuccessAction,
          failActionCreator: fetchRoadsterFailureAction,
          args: []
        })
      );
    }

    return state;
  },
  [FETCH_ROADSTER_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetched: true,
      isFetching: false,
      isFailed: false,
      roadster: action.payload.data
    };
  },
  [FETCH_ROADSTER_FAILURE]: (state) => {
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
