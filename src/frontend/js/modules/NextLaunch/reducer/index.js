import { handleActions } from 'redux-actions';

import {
  FETCH_NEXT_LAUNCH_REQUEST,
  FETCH_NEXT_LAUNCH_FAILURE,
  FETCH_NEXT_LAUNCH_SUCCESS,
  CLEAR_STORE
} from '../actions/types'

const initialState = {
  isFetched: false,
  isFetching: false,
  isFailed: false,
  data: []
}

const reducerMap = {
  [FETCH_NEXT_LAUNCH_REQUEST]: (state) => {
    return {
      ...state,
      isFetched: false,
      isFetching: true,
      isFailed: false,
    }
  },
  [FETCH_NEXT_LAUNCH_SUCCESS]: (state,action) => {
    const launch = action.payload

    return {
      ...state,
      isFetched: true,
      isFetching: false,
      isFailed: false,
      rocket: launch.rocket,
      missionName: launch.mission_name,
      launchDateUTC: launch.launch_date_utc,
      staticFireDateUTC: launch.static_fire_date_utc,
      payloads: launch.rocket.second_stage.payloads
    }
  },
  [FETCH_NEXT_LAUNCH_FAILURE]: (state) => {
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