import React from 'react'
import { Home } from 'components/Home'
import { Missions } from 'components/Missions'
import { Launches } from 'components/Launches'
import { NavLink, Route, Switch } from 'react-router-dom'
import { NotFound } from 'components/NotFound'
import { hot } from 'react-hot-loader'

class Application extends React.Component {
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

export default hot(module)(Application)