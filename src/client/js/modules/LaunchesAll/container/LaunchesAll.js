import { connect } from "react-redux";
import { moduleName } from "../config";
import { fetchLaunchesRequestAction, clearStoreAction } from "../actions";
import LaunchesAll from "../views/LaunchesAll";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchLaunchesRequestAction,
  clearStoreAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchesAll);
