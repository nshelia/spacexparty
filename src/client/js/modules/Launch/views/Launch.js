import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import {
  StyledLaunch,
  StyledLaunchImage,
  StyledLaunchDetails,
  StyledReplayButton
} from "../styled";
import Popup from 'shared/components/Popup'

export default React.memo((props) => {

  const [
    replayed,
    setReplayed
  ] = useState(false)

  const renderLaunchImage = () => {
    const { image, title } = props;

    if (image) {
      return (
        <StyledLaunchImage>
          <img loading="lazy" src={image} alt={title} />
        </StyledLaunchImage>
      );
    }

    return null;
  }
  const renderLaunchDetails = () => {
    const { details } = props;

    return <p>{details}</p>;
  }
  const { url } = props


  return (
    <StyledLaunch>
      {url && <StyledReplayButton onClick={() => setReplayed(!replayed)}>
        {"Replay"}
      </StyledReplayButton>}
      {renderLaunchImage()}
      <StyledLaunchDetails>
        <h3>{props.title}</h3>
        {renderLaunchDetails()}
      </StyledLaunchDetails>
      {replayed && <Popup url={url} close={() => setReplayed(false)} />}
    </StyledLaunch>
  );
})
