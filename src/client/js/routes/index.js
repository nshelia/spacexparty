import React from "react";
import { NotFound } from "modules/NotFound";
import { MainLoader } from "modules/MainLoader";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ "modules/Home"),
  loading: MainLoader,
  delay: 300,
  render(loaded, props) {
    const Component = loaded.Home;

    return <Component {...props} />;
  }
});
const Launches = Loadable({
  loader: () => import(/* webpackChunkName: "Launches" */ "modules/Launches"),
  loading: MainLoader,
  delay: 300,
  render(loaded, props) {
    const Component = loaded.Launches;

    return <Component {...props} />;
  }
});
const Missions = Loadable({
  loader: () => import(/* webpackChunkName: "Missions" */ "modules/Missions"),
  loading: MainLoader,
  delay: 300,
  render(loaded, props) {
    const Component = loaded.Missions;

    return <Component {...props} />;
  }
});

const Vehicles = Loadable({
  loader: () => import(/* webpackChunkName: "Vehicles" */ "modules/Vehicles"),
  loading: MainLoader,
  delay: 300,
  render(loaded, props) {
    const Component = loaded.Vehicles;

    return <Component {...props} />;
  }
});

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/missions",
    component: Missions
  },
  {
    path: "/launches",
    component: Launches
  },
  {
    path: "/vehicles",
    component: Vehicles
  },
  {
    component: NotFound
  }
];
