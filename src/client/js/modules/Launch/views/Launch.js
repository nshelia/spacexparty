import React from "react";
import PropTypes from "prop-types";
import {
  StyledLaunch,
  StyledLaunchImage,
  StyledLaunchDetails
} from "../styled";

export default class Launch extends React.PureComponent {
  renderLaunchImage() {
    const { image, title } = this.props;

    if (image) {
      return (
        <StyledLaunchImage>
          <img src={image} alt={title} />
        </StyledLaunchImage>
      );
    }

    return null;
  }

  renderLaunchDetails() {
    const { details } = this.props;

    return <p>{details}</p>;
  }

  render() {
    const { title } = this.props;

    return (
      <StyledLaunch>
        {this.renderLaunchImage()}
        <StyledLaunchDetails>
          <h3>{title}</h3>
          {this.renderLaunchDetails()}
        </StyledLaunchDetails>
      </StyledLaunch>
    );
  }
}

Launch.propTypes = {
  image: PropTypes.image,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
};
