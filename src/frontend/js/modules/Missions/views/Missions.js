import React from 'react'
import { MissionsAll } from 'modules/MissionsAll'

export default class Missions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex row">
          <div className="col-8">
            <MissionsAll />
          </div>
        </div>
      </React.Fragment>
    )
  }
}