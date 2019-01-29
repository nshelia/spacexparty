import { connect } from "react-redux";
import { moduleName } from "../config";
import { fetchRecentLaunchesRequestAction, clearStoreAction } from "../actions";
import RecentLaunches from "../views/RecentLaunches";
import { frontloadConnect } from "react-frontload";
import React from "react";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchRecentLaunchesRequestAction,
  clearStoreAction
};

const frontload = (props) => {
  return props.fetchRecentLaunchesRequestAction(2);
};

const options = {
  noServerRender: false,
  onMount: true,
  onUpdate: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(frontloadConnect(frontload, options)((props) => <RecentLaunches {...props} />));
