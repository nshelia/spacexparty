import React from "react";
import { MissionsAll } from "modules/MissionsAll";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";
import { Helmet } from 'react-helmet'

export default class Missions extends React.Component {
  render() {
    return (
      <FadeReady>
        <Helmet>
          <title>Missions</title>
        </Helmet>
        <Row>
          <Col col={8}>
            <MissionsAll />
          </Col>
        </Row>
      </FadeReady>
    );
  }
}
