import React from 'react'
import { NextLaunch } from 'components/NextLaunch'
import { RecentLaunches } from 'components/RecentLaunches'

export default class Home extends React.Component {
  render() {
    return (
      <div className="d-flex row">
        <div className="col-4">
          <NextLaunch/>
        </div>
        <div className="col-8">
          <RecentLaunches/>
        </div>
      </div>
    )
  }
}