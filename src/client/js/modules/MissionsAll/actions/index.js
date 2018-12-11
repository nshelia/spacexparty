import { createAction } from "redux-actions";

import {
  FETCH_MISSIONS_REQUEST,
  FETCH_MISSIONS_FAILURE,
  FETCH_MISSIONS_SUCCESS,
  CLEAR_STORE
} from "./types";

export const fetchMissionsFailureAction = createAction(FETCH_MISSIONS_FAILURE);
export const fetchMissionsRequestAction = createAction(FETCH_MISSIONS_REQUEST);
export const fetchMissionsSuccessAction = createAction(FETCH_MISSIONS_SUCCESS);

export const clearStoreAction = createAction(CLEAR_STORE);
