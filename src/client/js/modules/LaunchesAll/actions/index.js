import { createAction } from "redux-actions";

import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_FAILURE,
  FETCH_LAUNCHES_SUCCESS,
  CLEAR_STORE
} from "./types";

export const fetchLaunchesFailureAction = createAction(FETCH_LAUNCHES_FAILURE);
export const fetchLaunchesRequestAction = createAction(FETCH_LAUNCHES_REQUEST);
export const fetchLaunchesSuccessAction = createAction(FETCH_LAUNCHES_SUCCESS);

export const clearStoreAction = createAction(CLEAR_STORE);
