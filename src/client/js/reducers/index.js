import { combineReducers } from "redux-loop";
import launchesAll from "modules/LaunchesAll/reducer";
import missionsAll from "modules/MissionsAll/reducer";
import nextLaunch from "modules/NextLaunch/reducer";
import recentLaunches from "modules/RecentLaunches/reducer";
import vehicles from "modules/Vehicles/reducer";
import { connectRouter } from "connected-react-router";

export default (history) => combineReducers({
  launchesAll,
  missionsAll,
  nextLaunch,
  recentLaunches,
  vehicles,
  router: connectRouter(history)
});
