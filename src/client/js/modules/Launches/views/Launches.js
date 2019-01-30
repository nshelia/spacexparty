import React from "react";
import { LaunchesAll } from "modules/LaunchesAll";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";
import { Helmet } from 'react-helmet'
import { Favorites } from 'modules/Favorites'

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
