import React from "react";
import PropTypes from "prop-types";
import {
  StyledLaunch,
  StyledLaunchImage,
  StyledLaunchDetails
} from "../styled";

export default class Launch extends React.PureComponent {
  renderLaunchImage() {
    const { item } = this.props;

    if (item.links && item.links.mission_patch_small) {
      return (
        <StyledLaunchImage>
          <img src={item.links.mission_patch_small} alt={item.mission_name} />
        </StyledLaunchImage>
      );
    }

    return null;
  }

  renderLaunchDetails() {
    const { item } = this.props;
    const details = item.details || item.description;

    return <p>{details}</p>;
  }

  render() {
    const { item } = this.props;

    return (
      <StyledLaunch>
        {this.renderLaunchImage()}
        <StyledLaunchDetails>
          <h3>{item.mission_name}</h3>
          {this.renderLaunchDetails()}
        </StyledLaunchDetails>
      </StyledLaunch>
    );
  }
}

Launch.propTypes = {
  item: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    links: PropTypes.shape({ mission_patch_small: PropTypes.string })
  })
};