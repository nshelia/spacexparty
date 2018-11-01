import { createAction } from 'redux-actions';
import api from 'api'
import { moduleName } from '../config'

import {
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_FAILURE,
  FETCH_MISSIONS_SUCCESS,
  CLEAR_STORE
} from './types'


export const fetchMissionsFailureAction = createAction(FETCH_MISSIONS_FAILURE)
export const fetchMissionsRequestAction = createAction(FETCH_MISSIONS_REQUEST)
export const fetchMissionsSuccessAction = createAction(FETCH_MISSIONS_SUCCESS)

export const fetchMissionsAction = (limit,mission_id) => async (dispatch,getState) => {
  const moduleState = getState()[moduleName]

  try {
    if (moduleState && (!moduleState.isFetching && !moduleState.isFetched)) {

      dispatch(fetchMissionsRequestAction())
      const { data: items } = await api.getMissions(limit,mission_id)

      dispatch(fetchMissionsSuccessAction(items))
    }
  } catch (err) {
    dispatch(fetchMissionsFailureAction(err))
  }
}

export const clearStoreAction = createAction(CLEAR_STORE)