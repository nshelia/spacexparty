import { createAction } from "redux-actions";

import {
  FETCH_NEXT_LAUNCH_REQUEST,
  FETCH_NEXT_LAUNCH_FAILURE,
  FETCH_NEXT_LAUNCH_SUCCESS,
  CLEAR_STORE
} from "./types";

export const fetchNextLaunchFailureAction = createAction(FETCH_NEXT_LAUNCH_FAILURE);
export const fetchNextLaunchRequestAction = createAction(FETCH_NEXT_LAUNCH_REQUEST);
export const fetchNextLaunchSuccessAction = createAction(FETCH_NEXT_LAUNCH_SUCCESS);

export const clearStoreAction = createAction(CLEAR_STORE);
