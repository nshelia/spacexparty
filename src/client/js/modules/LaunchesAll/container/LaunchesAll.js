import { connect } from "react-redux";
import { moduleName } from "../config";
import { fetchLaunchesRequestAction, clearStoreAction } from "../actions";
import LaunchesAll from "../views/LaunchesAll";
import { frontloadConnect } from "react-frontload";
import React from "react";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchLaunchesRequestAction,
  clearStoreAction
};

const frontload = (props) => {
  return props.fetchLaunchesRequestAction();
};

const options = {
  noServerRender: false,
  onMount: true,
  onUpdate: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(frontloadConnect(frontload, options)((props) => <LaunchesAll {...props} />));
