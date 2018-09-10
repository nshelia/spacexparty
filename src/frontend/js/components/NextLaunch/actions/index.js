import { createAction } from 'redux-actions';
import api from 'api'

import {
  FETCH_NEXT_LAUNCH_REQUEST,
  FETCH_NEXT_LAUNCH_FAILURE,
  FETCH_NEXT_LAUNCH_SUCCESS,
  CLEAR_STORE
} from './types'


export const fetchNextLaunchFailureAction = createAction(FETCH_NEXT_LAUNCH_FAILURE)
export const fetchNextLaunchRequestAction = createAction(FETCH_NEXT_LAUNCH_REQUEST)
export const fetchNextLaunchSuccessAction = createAction(FETCH_NEXT_LAUNCH_SUCCESS)

export const fetchNextLaunchAction = () => async (dispatch) => {
  try {
    dispatch(fetchNextLaunchRequestAction())
    const { data: launch } = await api.getNextLaunch()

    dispatch(fetchNextLaunchSuccessAction(launch))
  } catch (err) {
    dispatch(fetchNextLaunchFailureAction(err))
  }
}

export const clearStoreAction = createAction(CLEAR_STORE)