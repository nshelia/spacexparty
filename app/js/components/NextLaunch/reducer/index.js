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

export default (state = initialState,action) => {
	switch (action.type) {
		case FETCH_NEXT_LAUNCH_REQUEST: 
			return {
				...state,
				isFetched: false,
				isFetching: true,
				isFailed: false,
			}
		case FETCH_NEXT_LAUNCH_SUCCESS:
			const launch = action.payload
			return {
				...state,
				isFetched: true,
				isFetching: false,
				isFailed: false,
				rocket: launch.rocket,
				missionName: launch.mission_name,
				launchDateUTC: launch.launch_date_utc,
				staticFireDateUTC: launch.static_fire_date_utc
			}
		case FETCH_NEXT_LAUNCH_FAILURE: 
			return {
				...state,
				isFetched: false,
				isFetching: false,
				isFailed: true,
			}		
	}
	return state
}