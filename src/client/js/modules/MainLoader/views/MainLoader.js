import React from "react";
import { StyledLoader, StyledOverlay } from "../styled";
import PropTypes from "prop-types";

export default function MainLoader(props) {
  if (props.pastDelay) {
    return (
      <StyledOverlay>
        <StyledLoader />
      </StyledOverlay>
    );
  }

  return null;
}

MainLoader.propTypes = {
  pastDelay: PropTypes.bool.isRequired
};
