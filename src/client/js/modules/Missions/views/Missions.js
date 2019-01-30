import React from "react";
import { MissionsAll } from "modules/MissionsAll";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";
import { Helmet } from 'react-helmet'
import { Favorites } from 'modules/Favorites'

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
