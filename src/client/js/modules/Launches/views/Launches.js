import React from "react";
import { LaunchesAll } from "modules/LaunchesAll";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";
import { Helmet } from 'react-helmet'

export default class Launches extends React.Component {
  render() {
    return (
      <FadeReady>
        <Helmet>
            <title>Launches</title>
        </Helmet>
        <Row>
          <Col col={8}>
            <LaunchesAll />
          </Col>
        </Row>
      </FadeReady>
    );
  }
}
