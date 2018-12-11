import { connect } from "react-redux";
import { moduleName } from "../config";
import NextLaunch from "../views/NextLaunch";
import { fetchNextLaunchRequestAction, clearStoreAction } from "../actions";
import { frontloadConnect } from "react-frontload";
import React from "react";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchNextLaunchRequestAction,
  clearStoreAction
};

const frontload = (props) => {
  return props.fetchNextLaunchRequestAction();
};

const options = {
  noServerRender: false,
  onMount: true,
  onUpdate: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(frontloadConnect(frontload, options)((props) => <NextLaunch {...props} />));
