import { connect } from "react-redux";
import { moduleName } from "../config";
import Roadster from "../views/Roadster";
import { fetchRoadsterRequestAction, clearStoreAction } from "../actions";
import { frontloadConnect } from "react-frontload";
import React from "react";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchRoadsterRequestAction,
  clearStoreAction
};

const frontload = (props) => {
  return props.fetchRoadsterRequestAction();
};

const options = {
  noServerRender: false,
  onMount: true,
  onUpdate: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(frontloadConnect(frontload, options)((props) => <Roadster {...props} />));
