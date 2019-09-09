import { connect } from "react-redux";
import { moduleName } from "../config";
import { fetchMissionsRequestAction, clearStoreAction } from "../actions";
import MissionsAll from "../views/MissionsAll";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchMissionsRequestAction,
  clearStoreAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MissionsAll);
