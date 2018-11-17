import { connect } from "react-redux";
import { moduleName } from '../config'
import NextLaunch from '../views/NextLaunch'
import {
  fetchNextLaunchAction,
  clearStoreAction
} from '../actions'

const mapStateToProps = (state) => state[moduleName]

const mapDispatchToProps = {
  fetchNextLaunchAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(NextLaunch)
