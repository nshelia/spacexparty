import { createAction } from 'redux-actions';
import api from 'api'

import {
  FETCH_RECENT_LAUNCHES_REQUEST,
  FETCH_RECENT_LAUNCHES_FAILURE,
  FETCH_RECENT_LAUNCHES_SUCCESS,
  CLEAR_STORE
} from './types'


export const fetchRecentLaunchesFailureAction = createAction(FETCH_RECENT_LAUNCHES_FAILURE)
export const fetchRecentLaunchesRequestAction = createAction(FETCH_RECENT_LAUNCHES_REQUEST)
export const fetchRecentLaunchesSuccessAction = createAction(FETCH_RECENT_LAUNCHES_SUCCESS)

export const fetchRecentLaunchesAction = () => async (dispatch) => {
  try {
    dispatch(fetchRecentLaunchesRequestAction())
    const { data: launch } = await api.getRecentLaunches()

    dispatch(fetchRecentLaunchesSuccessAction(launch))
  } catch (err) {
    dispatch(fetchRecentLaunchesFailureAction(err))
  }
}

export const clearStoreAction = createAction(CLEAR_STORE)