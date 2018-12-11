import { connect } from "react-redux";
import { moduleName } from "../config";
import { fetchMissionsRequestAction, clearStoreAction } from "../actions";
import MissionsAll from "../views/MissionsAll";
import { frontloadConnect } from "react-frontload";
import React from "react";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchMissionsRequestAction,
  clearStoreAction
};

const frontload = (props) => {
  return props.fetchMissionsRequestAction(10);
};

const options = {
  noServerRender: false,
  onMount: true,
  onUpdate: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(frontloadConnect(frontload, options)((props) => <MissionsAll {...props} />));
