import React from "react";
import { LaunchesAll } from "modules/LaunchesAll";
import { Helmet } from 'react-helmet'

export default class Launches extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Launches</title>
        </Helmet>
        <LaunchesAll />
      </React.Fragment>
    );
  }
}
