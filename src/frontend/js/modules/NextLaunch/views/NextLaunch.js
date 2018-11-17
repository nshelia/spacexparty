import React from 'react'
import PropTypes from 'prop-types'
import Countdown from 'react-countdown-now';
import { BoxBlockHeader } from 'shared/styled/Box'
import { StyledNextLaunchBox, StyledNextLaunchCountdown, StyledCountdown } from '../styled'
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

    return <StyledCountdown>
      {hours}:
      {minutes}:
      {seconds}
    </StyledCountdown>;

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
        <BoxBlockHeader>
          Upcoming launch
        </BoxBlockHeader>
        <StyledNextLaunchBox className="d-flex flex-column justify-content-between">
          <StyledNextLaunchCountdown className="d-flex align-items-center justify-content-center">
            {this.renderCountdown()}
          </StyledNextLaunchCountdown>
        </StyledNextLaunchBox>
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

export default NextLaunch
