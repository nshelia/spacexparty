import React from "react";
import PropTypes from "prop-types";
import Countdown from "react-countdown-now";
import { BoxBlockHeader } from "shared/styled/Box";
import { Loader } from "shared/styled/Loader";
import {
  StyledNextLaunchBox,
  StyledNextLaunchCountdown,
  StyledCountdown
} from "../styled";

class NextLaunch extends React.PureComponent {
  constructor() {
    super();
    this.countdownRenderer = this.countdownRenderer.bind(this);
  }

  countdownRenderer({ hours, minutes, seconds, completed }) {
    if (completed) {
      return "You can watch live here";
    }

    return (
      <StyledCountdown>
        {hours}:{minutes}:{seconds}
      </StyledCountdown>
    );
  }

  renderCountdown() {
    if (this.props.isFetched) {
      if (this.props.launchDateUTC) {
        return (
          <Countdown
            date={this.props.launchDateUTC}
            renderer={this.countdownRenderer}
          />
        );
      }

      return "TBC";
    }

    return <Loader />;
  }

  render() {
    return (
      <React.Fragment>
        <BoxBlockHeader>Upcoming launch</BoxBlockHeader>
        <StyledNextLaunchBox>
          <StyledNextLaunchCountdown>
            {this.renderCountdown()}
          </StyledNextLaunchCountdown>
        </StyledNextLaunchBox>
      </React.Fragment>
    );
  }
}

NextLaunch.propTypes = {
  clearStoreAction: PropTypes.func.isRequired,
  fetchNextLaunchRequestAction: PropTypes.func.isRequired,
  isFetched: PropTypes.bool.isRequired,
  launchDateUTC: PropTypes.string
};

export default NextLaunch;
