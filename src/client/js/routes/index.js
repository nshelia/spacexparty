import { NotFound } from "modules/NotFound";
import loadable from '@loadable/component'
import { fetchNextLaunchRequestAction } from 'modules/NextLaunch/actions'
import { fetchRecentLaunchesRequestAction } from 'modules/RecentLaunches/actions'
import { fetchMissionsRequestAction } from 'modules/MissionsAll/actions'
import { fetchLaunchesRequestAction } from 'modules/LaunchesAll/actions'
import { fetchVehiclesRequestAction } from 'modules/Vehicles/actions'

const Home = loadable(() => import(/* webpackChunkName: "Home" */ "modules/Home/views/Home"))
const Missions = loadable(() => import(/* webpackChunkName: "Missions" */ "modules/Missions/views/Missions"))
const Vehicles = loadable(() => import(/* webpackChunkName: "Vehicles" */ "modules/Vehicles/container/Vehicles"))
const Launches = loadable(() => import(/* webpackChunkName: "Launches" */ "modules/Launches/views/Launches"))

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData: async (dispatch, req) => {
      await dispatch(fetchNextLaunchRequestAction())
      await dispatch(fetchRecentLaunchesRequestAction(2))
    }
  },
  {
    path: "/missions",
    component: Missions,
    loadData: async (dispatch, req) => {
      await dispatch(fetchMissionsRequestAction())
    }
  },
  {
    path: "/launches",
    component: Launches,
    loadData: async (dispatch, req) => {
      await dispatch(fetchLaunchesRequestAction())
    }
  },
  {
    path: "/vehicles",
    component: Vehicles,
    loadData: async (dispatch, req) => {
      await dispatch(fetchVehiclesRequestAction())
    }
  },
  {
    component: NotFound,
    isNotFound: true
  }
];
