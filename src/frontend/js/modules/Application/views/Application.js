import React from 'react'
import { Home } from 'modules/Home'
import { Missions } from 'modules/Missions'
import { Launches } from 'modules/Launches'
import { NavLink, Route, Switch } from 'react-router-dom'
import { NotFound } from 'modules/NotFound'

export default class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="live-message">
          <h1>


SpaceX Calendar
          </h1>
          <p>


                        SpaceX rockets launch dates,
                        videos and other great stuff
                        about companys work.
          </p>
          <header>
            <NavLink
              activeClassName="current"
              exact
              to="/"
            >


                            Home
            </NavLink>
            <NavLink
              activeClassName="current"
              to="/missions"
            >


                            Missions
            </NavLink>
            <NavLink
              activeClassName="current"
              to="/launches"
            >


                            Launches
            </NavLink>
          </header>
        </div>

        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/missions"
            component={Missions}
          />
          <Route
            path="/launches"
            component={Launches}
          />
          <Route component={NotFound} />
        </Switch>

      </div>
    )
  }
}

