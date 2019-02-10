import React from "react";
import { MissionsAll } from "modules/MissionsAll";
import { Helmet } from 'react-helmet'

export default class Missions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Missions</title>
        </Helmet>
        <MissionsAll />
      </React.Fragment>
    );
  }
}
