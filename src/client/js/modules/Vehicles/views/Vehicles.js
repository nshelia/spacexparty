import React from "react";
import { Row, Col } from "styled-bootstrap-grid";
import { Vehicle } from 'modules/Vehicle'
import { FadeReady } from "shared/styled/FadeReady";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet'
import { BoxBlockHeader } from "shared/styled/Box";

class Vehicles extends React.Component {
  renderShips() {
    if (this.props.isFetched) {
      return this.props.ships.map((item,index) => {
        return (
          <Vehicle type="ship" item={item} key={index}/>
        )
      })
    }
  }

  renderRockets() {
    if (this.props.isFetched) {
      return this.props.rockets.reverse().map((item,index) => {
        return (
          <Vehicle type="rocket" item={item} key={index}/>
        )
      })
    }
  }

  renderRoadster() {
    if (this.props.isFetched) {
      return <Vehicle type="roadster" item={this.props.roadster} />
    }
  }

  render() {
    return (
      <FadeReady>
        <Helmet>
          <title>Vehicles</title>
        </Helmet>
        <Row>
          <Col col={8}>
            <BoxBlockHeader>Vehicles</BoxBlockHeader>
          </Col>
          {this.renderRoadster()}
          {this.renderRockets()}
          {this.renderShips()}
        </Row>
      </FadeReady>
    );
  }
}

Vehicles.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  ships: PropTypes.arrayOf(PropTypes.object),
  rockets: PropTypes.arrayOf(PropTypes.object),
  roadster: PropTypes.object
};

export default Vehicles;
