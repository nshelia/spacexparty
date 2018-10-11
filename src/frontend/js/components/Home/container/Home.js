import React from 'react'
import { RecentLaunches } from 'components/RecentLaunches'

export default class Home extends React.Component {
  render() {
    return (
      <div className="d-flex row">
        <div className="col-8">
          <RecentLaunches/>
        </div>
      </div>
    )
  }
}