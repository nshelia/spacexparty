import { createAction } from "redux-actions";

import {
  FETCH_ROADSTER_REQUEST,
  FETCH_ROADSTER_FAILURE,
  FETCH_ROADSTER_SUCCESS,
  CLEAR_STORE
} from "./types";

export const fetchRoadsterFailureAction = createAction(FETCH_ROADSTER_FAILURE);
export const fetchRoadsterRequestAction = createAction(FETCH_ROADSTER_REQUEST);
export const fetchRoadsterSuccessAction = createAction(FETCH_ROADSTER_SUCCESS);

export const clearStoreAction = createAction(CLEAR_STORE);
