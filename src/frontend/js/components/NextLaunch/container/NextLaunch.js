import React from 'react'
import { connect } from "react-redux";
import { moduleName } from '../config'
import { fetchNextLaunchAction } from 'components/NextLaunch/actions'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now';

class NextLaunch extends React.Component {
  constructor() {
    super()
    this.countdownRenderer = this.countdownRenderer.bind(this)
  }
  componentDidMount() {
      this.props.fetchNextLaunchAction()
  }
  countdownRenderer({ hours, minutes, seconds, completed }) {
    if (completed) {
      return 'You can watch live here'
    } else {
      return <span className="countdown">{hours}:{minutes}:{seconds}</span>;
    }
  }
  render() {
    return (
      <div className="box next-launch fade-ready">
        <span>Upcoming launch countdown</span>
        <div className="next-launch__countdown box box-inner fade-ready">
          {this.props.isFetched 
            ? 
            (
              <Countdown
                date={this.props.launchDateUTC}
                renderer={this.countdownRenderer}
              />
            ) 
            : <div className="loader"/>
          }
        </div>
      </div>
    )
  }
}

NextLaunch.propTypes = {
    fetchNextLaunchAction: PropTypes.func.isRequired
}

const mapStateToProps = (state) => state[moduleName]


const mapDispatchToProps = {
    fetchNextLaunchAction
}

export default connect(mapStateToProps,mapDispatchToProps)(NextLaunch)
