import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchMissionsAction,
  clearStoreAction
} from '../actions'
import LaunchesAll from '../views/LaunchesAll'

const mapStateToProps = (state) => state[moduleName]

const mapDispatchToProps = {
  fetchMissionsAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(LaunchesAll)
