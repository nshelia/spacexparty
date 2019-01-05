import React from "react";
import PropTypes from "prop-types";
import {
  StyledVehicle,
  StyledVehicleOverlay,
  StyledFadedImage
} from "../styled";
import { Col } from "styled-bootstrap-grid";

export default class Vehicle extends React.PureComponent {
  state = {
    imageLoaded: false
  }

  renderImage() {
    return (
      <StyledFadedImage imageLoaded={this.state.imageLoaded} onLoad={() => this.setState({ imageLoaded: true })} src={this.getVehicleImage()}/>
    );
  }

  getVehicleImage() {
    switch (this.props.type) {
      case 'roadster':
        return this.props.item.flickr_images[0]

      case 'rocket':
        return this.props.item.flickr_images[0]

      case 'ship':
      default:
        return this.props.item.image

    }
  }

  getVehicleName() {
    switch (this.props.type) {
      case 'roadster':
        return this.props.item.name

      case 'rocket':
        return this.props.item.rocket_name

      case 'ship':
      default:
        return this.props.item.ship_name

    }
  }

  getVehicleDetails() {
    switch (this.props.type) {
      case 'roadster':
        return this.props.item.details


      case 'rocket':
        return this.props.item.description

      case 'ship':
      default:
        return this.props.item.home_port

    }
  }

  renderDetails() {
    return (
      <React.Fragment>
        <h4>{this.getVehicleName()}</h4>
        <p>{this.getVehicleDetails()}</p>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Col col={8}>
        <StyledVehicle>
          {this.renderImage()}
          <StyledVehicleOverlay>
            {this.renderDetails()}
          </StyledVehicleOverlay>
        </StyledVehicle>
      </Col>
    );
  }
}

Vehicle.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.shape({
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired),
    image: PropTypes.string,
    name: PropTypes.string,
    rocket_name: PropTypes.string,
    ship_name: PropTypes.string,
    details: PropTypes.string,
    description: PropTypes.string,
    home_port: PropTypes.string
  })
};
