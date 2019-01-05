import { createAction } from "redux-actions";

import {
  FETCH_VEHICLES_REQUEST,
  FETCH_VEHICLES_FAILURE,
  FETCH_VEHICLES_SUCCESS,
  CLEAR_STORE
} from "./types";

// Vehicles fetch api actions
export const fetchVehiclesFailureAction = createAction(FETCH_VEHICLES_FAILURE);
export const fetchVehiclesRequestAction = createAction(FETCH_VEHICLES_REQUEST);
export const fetchVehiclesSuccessAction = createAction(FETCH_VEHICLES_SUCCESS);

export const clearStoreAction = createAction(CLEAR_STORE);
