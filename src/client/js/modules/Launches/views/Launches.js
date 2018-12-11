import React from "react";
import { LaunchesAll } from "modules/LaunchesAll";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";

export default class Launches extends React.Component {
  render() {
    return (
      <FadeReady>
        <Row>
          <Col col={8}>
            <LaunchesAll />
          </Col>
        </Row>
      </FadeReady>
    );
  }
}
