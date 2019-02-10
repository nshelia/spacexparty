import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  StyledLaunch,
  StyledLaunchImage,
  StyledLaunchDetails
} from "../styled";

export default React.memo(function Launch(props) {
  const renderLaunchImage = () => {
    const { image, title } = props;

    if (image) {
      return (
        <StyledLaunchImage>
          <img src={image} alt={title} />
        </StyledLaunchImage>
      );
    }

    return null;
  }
  const renderLaunchDetails = () => {
    const { details } = props;

    return <p>{details}</p>;
  }

  return (
    <StyledLaunch>
      {renderLaunchImage()}
      <StyledLaunchDetails>
        <h3>{props.title}</h3>
        {renderLaunchDetails()}
      </StyledLaunchDetails>
    </StyledLaunch>
  );
})
