import React from "react";
import _ from "lodash";
import {
  StyledLaunchPlaceholderImage,
  StyledLaunchPlaceholderRow,
  StyledLaunchPlaceholderDetails
} from "../styled";
import { StyledLaunch } from "modules/Launch/styled";

export default (props) => _.range(0, props.count).map((index) => <StyledLaunch className="d-flex" key={index}>
  <StyledLaunchPlaceholderImage />
  <StyledLaunchPlaceholderDetails>
    <StyledLaunchPlaceholderRow />
    <StyledLaunchPlaceholderRow />
  </StyledLaunchPlaceholderDetails>
</StyledLaunch>);
