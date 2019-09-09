import { connect } from "react-redux";
import { moduleName } from "../config";
import NextLaunch from "../views/NextLaunch";
import { fetchNextLaunchRequestAction, clearStoreAction } from "../actions";

const mapStateToProps = (state) => state[moduleName];

const mapDispatchToProps = {
  fetchNextLaunchRequestAction,
  clearStoreAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextLaunch);
