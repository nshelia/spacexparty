import React from 'react'
import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchNextLaunchAction,
  clearStoreAction
} from 'components/NextLaunch/actions'
import PropTypes from 'prop-types'

class RecentLaunches extends React.Component {
  componentWillUnmount() {
    this.props.clearStoreAction()
  }

  render() {
    return (
      <div className="box">
        Recent launches
      </div>
    )
  }
}

RecentLaunches.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  launchDateUTC: PropTypes.string,
  fetchNextLaunchAction: PropTypes.func.isRequired,
  clearStoreAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state[moduleName]


const mapDispatchToProps = {
  fetchNextLaunchAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(RecentLaunches)
