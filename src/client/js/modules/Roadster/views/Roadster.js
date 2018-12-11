import React from "react";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";
import { StyledRoadsterImages } from "../styled";
import PropTypes from "prop-types";

class Roadster extends React.Component {
  renderImages() {
    if (this.props.isFetched) {
      return this.props.roadster.flickr_images.map((src, index) => {
        return <img src={src} key={index} />;
      });
    }

    return null;
  }

  render() {
    return (
      <FadeReady>
        <Row>
          <Col col={8}>
            <StyledRoadsterImages>{this.renderImages()}</StyledRoadsterImages>
          </Col>
        </Row>
      </FadeReady>
    );
  }
}

Roadster.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  roadster: PropTypes.PropTypes.shape({
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  })
};

export default Roadster;
