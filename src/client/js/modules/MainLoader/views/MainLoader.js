import React from "react";
import { StyledLoader, StyledOverlay } from "../styled";
import PropTypes from "prop-types";

class MainLoader extends React.Component {
  render() {
    if (this.props.pastDelay) {
      return (
        <StyledOverlay>
          <StyledLoader />
        </StyledOverlay>
      );
    }

    return null;
  }
}

MainLoader.propTypes = {
  pastDelay: PropTypes.bool.isRequired
};

export default MainLoader;
