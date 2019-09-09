import { connect } from "react-redux";
import { moduleName } from "../config";
import { fetchRecentLaunchesRequestAction, clearStoreAction } from "../actions";
import RecentLaunches from "../views/RecentLaunches";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchRecentLaunchesRequestAction,
  clearStoreAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentLaunches);
