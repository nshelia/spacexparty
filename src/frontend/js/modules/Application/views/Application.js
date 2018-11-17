import React from 'react'
import { Home } from 'modules/Home'
import { Missions } from 'modules/Missions'
import { Launches } from 'modules/Launches'
import { Route, Switch } from 'react-router-dom'
import { NotFound } from 'modules/NotFound'
import { Header } from 'modules/Header'

export default class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
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

