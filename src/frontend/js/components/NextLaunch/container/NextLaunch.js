import React from 'react'
import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchNextLaunchAction,
  clearStoreAction
} from '../actions'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now';

class NextLaunch extends React.PureComponent {
  constructor() {
    super()
    this.countdownRenderer = this.countdownRenderer.bind(this)
  }

  componentWillUnmount() {
    this.props.clearStoreAction()
  }

  componentDidMount() {
    this.props.fetchNextLaunchAction()
  }

  countdownRenderer({ hours, minutes, seconds, completed }) {
    if (completed) {
      return 'You can watch live here'
    }

    return <span className="countdown">
      {hours}:
      {minutes}:
      {seconds}
    </span>;

  }

  renderCountdown() {
    if (this.props.isFetched) {
      if (this.props.launchDateUTC) {
        return (
          <Countdown
            date={this.props.launchDateUTC}
            renderer={this.countdownRenderer}
          />
        )
      }

      return 'TBC'
    }

    return <div className="loader" />
  }

  render() {
    return (
      <React.Fragment>
        <div className="box block-header">


          Upcoming launch
        </div>
        <div className="box next-launch fade-ready">
          <div className="next-launch-countdown box box-inner fade-ready">
            {this.renderCountdown()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

NextLaunch.propTypes = {
  clearStoreAction: PropTypes.func.isRequired,
  fetchNextLaunchAction: PropTypes.func.isRequired,
  isFetched: PropTypes.bool.isRequired,
  launchDateUTC: PropTypes.string,
}

const mapStateToProps = (state) => state[moduleName]


const mapDispatchToProps = {
  fetchNextLaunchAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(NextLaunch)
