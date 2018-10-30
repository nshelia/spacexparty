import { createAction } from 'redux-actions';
import api from 'api'
import { moduleName } from '../config'

import {
  FETCH_RECENT_LAUNCHES_REQUEST,
  FETCH_RECENT_LAUNCHES_FAILURE,
  FETCH_RECENT_LAUNCHES_SUCCESS,
  CLEAR_STORE
} from './types'


export const fetchRecentLaunchesFailureAction = createAction(FETCH_RECENT_LAUNCHES_FAILURE)
export const fetchRecentLaunchesRequestAction = createAction(FETCH_RECENT_LAUNCHES_REQUEST)
export const fetchRecentLaunchesSuccessAction = createAction(FETCH_RECENT_LAUNCHES_SUCCESS)

export const fetchRecentLaunchesAction = (limit) => async (dispatch,getState) => {
  const moduleState = getState()[moduleName]

  try {
    if (moduleState && (!moduleState.isFetching && !moduleState.isFetched)) {

      dispatch(fetchRecentLaunchesRequestAction())
      const { data: launch } = await api.getRecentLaunches(limit)

      dispatch(fetchRecentLaunchesSuccessAction(launch))
    }
  } catch (err) {
    dispatch(fetchRecentLaunchesFailureAction(err))
  }
}

export const clearStoreAction = createAction(CLEAR_STORE)