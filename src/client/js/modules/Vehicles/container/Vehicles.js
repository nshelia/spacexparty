import { connect } from "react-redux";
import { moduleName } from "../config";
import Vehicles from "../views/Vehicles";
import { fetchVehiclesRequestAction, clearStoreAction } from "../actions";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchVehiclesRequestAction,
  clearStoreAction
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicles);
