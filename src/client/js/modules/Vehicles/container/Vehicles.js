import { connect } from "react-redux";
import { moduleName } from "../config";
import Vehicles from "../views/Vehicles";
import { fetchVehiclesRequestAction, clearStoreAction } from "../actions";
import { frontloadConnect } from "react-frontload";
import React from "react";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchVehiclesRequestAction,
  clearStoreAction
};

const frontload = (props) => {
  return props.fetchVehiclesRequestAction();
};

const options = {
  noServerRender: false,
  onMount: true,
  onUpdate: false
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(frontloadConnect(frontload, options)((props) => <Vehicles {...props} />));
