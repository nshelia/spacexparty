import React from "react";
import { RecentLaunches } from "modules/RecentLaunches";
import { NextLaunch } from "modules/NextLaunch";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";
import { Helmet } from 'react-helmet'

export default class Home extends React.Component {
  render() {
    return (
      <FadeReady>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Row>
          <Col col={8}>
            <NextLaunch />
          </Col>
        </Row>
        <Row>
          <Col col={8}>
            <RecentLaunches />
          </Col>
        </Row>
      </FadeReady>
    );
  }
}
