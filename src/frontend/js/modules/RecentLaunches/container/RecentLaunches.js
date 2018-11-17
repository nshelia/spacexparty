import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchRecentLaunchesAction,
  clearStoreAction
} from '../actions'
import RecentLaunches from '../views/RecentLaunches'

const mapStateToProps = (state) => state[moduleName]

const mapDispatchToProps = {
  fetchRecentLaunchesAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(RecentLaunches)
