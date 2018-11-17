import React from 'react'
import { LaunchesAll } from 'modules/LaunchesAll'

export default class Launches extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex row">
          <div className="col-8">
            <LaunchesAll />
          </div>
        </div>
      </React.Fragment>
    )
  }
}