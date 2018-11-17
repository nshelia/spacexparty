import React from 'react'
import { RecentLaunches } from 'modules/RecentLaunches'
import { NextLaunch } from 'modules/NextLaunch'

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex row">
          <div className="col-8">
            <NextLaunch />
          </div>
        </div>
        <div className="d-flex row">
          <div className="col-8">
            <RecentLaunches />
          </div>
        </div>
      </React.Fragment>
    )
  }
}