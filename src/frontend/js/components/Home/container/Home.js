import React from 'react'
import { RecentLaunches } from 'components/RecentLaunches'
import { NextLaunch } from 'components/NextLaunch'
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex row">
          <div className="col-12">
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