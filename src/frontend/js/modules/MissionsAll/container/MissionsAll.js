import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchMissionsAction,
  clearStoreAction
} from '../actions'
import MissionsAll from '../views/MissionsAll'

const mapStateToProps = (state) => state[moduleName]

const mapDispatchToProps = {
  fetchMissionsAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(MissionsAll)
