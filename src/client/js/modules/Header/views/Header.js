import React from "react";
import { StyledHeader, StyledUl, StyledTab } from "../styled";

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <h1>SpaceX Calendar</h1>
        <p>
          SpaceX rockets launch dates, videos and other great stuff about
          companys work.
        </p>
        <StyledUl>
          <li>
            <StyledTab activeClassName="current" exact to="/">
              Home
            </StyledTab>
          </li>
          <li>
            <StyledTab activeClassName="current" to="/launches">
              Launches
            </StyledTab>
          </li>
          <li>
            <StyledTab activeClassName="current" to="/missions">
              Missions
            </StyledTab>
          </li>
          <li>
            <StyledTab activeClassName="current" to="/vehicles">
              Vehicles
            </StyledTab>
          </li>
        </StyledUl>
      </StyledHeader>
    );
  }
}
