import { handleActions } from "redux-actions";
import api from "api";
import { loop, Cmd } from "redux-loop";
import {
  fetchVehiclesFailureAction,
  fetchVehiclesSuccessAction
} from "../actions";

import {
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_FAILURE,
  FETCH_VEHICLES_SUCCESS,
  CLEAR_STORE
} from "../actions/types";

const initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
};

const reducerMap = {
  [FETCH_VEHICLES_REQUEST]: (state) => {
    console.log(state)
    if (state && (!state.isFetching && !state.isFetched && !state.isFailed)) {
      return loop(
        {
          ...state,
          isFetched: false,
          isFetching: true,
          isFailed: false
        },
        Cmd.run(api.getVehicles, {
          successActionCreator: fetchVehiclesSuccessAction,
          failActionCreator: fetchVehiclesFailureAction,
          args: []
        })
      );
    }

    return state;
  },
  [FETCH_VEHICLES_SUCCESS]: (state, { payload: { roadster, rockets, ships } }) => {
    return {
      ...state,
      isFetched: true,
      isFetching: false,
      isFailed: false,
      roadster,
      rockets,
      ships: ships.filter((item) => item.image && item.ship_name && item.home_port)
    };
  },
  [FETCH_VEHICLES_FAILURE]: (state) => {
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
