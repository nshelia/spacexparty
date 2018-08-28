import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'
import applicationReducer from "components/Application/reducer";
import homeReducer from "components/Home/reducer";
import missionsReducer from "components/Missions/reducer";
import nextLaunchReducer from "components/NextLaunch/reducer";

export default combineReducers({
	routing: routerReducer,
	application: applicationReducer,
	home: homeReducer,
	missions: missionsReducer,
	nextLaunch: nextLaunchReducer
});