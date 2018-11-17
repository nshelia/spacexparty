import React from 'react'
import { StyledHeader } from '../styled'
import { NavLink } from 'shared/styled/NavLink'

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <h1>


SpaceX Calendar
        </h1>
        <p>


                      SpaceX rockets launch dates,
                      videos and other great stuff
                      about companys work.
        </p>
        <ul className="d-flex">
          <li>
            <NavLink
              activeClassName="current"
              exact
              to="/"
            >


                          Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to="/missions"
            >


                          Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to="/launches"
            >


                          Launches
            </NavLink>
          </li>
        </ul>
      </StyledHeader>
    )
  }
}

