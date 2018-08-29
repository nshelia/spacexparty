import React from 'react'
import { Home } from 'components/Home'
import { Missions } from 'components/Missions'
import { NavLink, Route, Switch } from 'react-router-dom'
import { NotFound } from 'components/NotFound'

export default class Application extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="live-message">
                    <h1>SpaceX Calendar</h1>
                    <p>
                        SpaceX rockets launch dates,
                        videos and other great stuff
                        about companys work.
                     </p>
                    <header>
                        <NavLink exact activeClassName="current" to="/">
                            Home
                        </NavLink>
                        <NavLink activeClassName="current" to="/missions">
                            Missions
                        </NavLink>
                    </header>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/missions" component={Missions}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}