import React from "react";
import { Row, Col } from "styled-bootstrap-grid";
import { FadeReady } from "shared/styled/FadeReady";
import { StyledRoadsterImages, StyledRoadsterOverlay, StyledFadedImage } from "../styled";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet'

class Roadster extends React.Component {
  state = {
    imageLoaded: false
  }
  renderImages() {
    if (this.props.isFetched) {
      return this.props.roadster.flickr_images.slice(0,1).map((src, index) => {
        return (
          <StyledFadedImage key={index} imageLoaded={this.state.imageLoaded} onLoad={() => this.setState({imageLoaded: true})} src={src}/>
        );
      });
    }

    return null;
  }

  renderDetails() {
    if (this.props.isFetched) {
      return (
        <React.Fragment>
          <h4>{this.props.roadster.name}</h4>
          <p>{this.props.roadster.details}</p>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <FadeReady>
        <Helmet>
            <title>Roadster</title>
        </Helmet>
        <Row>
          <Col col={8}>
            <StyledRoadsterImages>
              {this.renderImages()}
              <StyledRoadsterOverlay>
                {this.renderDetails()}
              </StyledRoadsterOverlay>
            </StyledRoadsterImages>
          </Col>
        </Row>
      </FadeReady>
    );
  }
}

Roadster.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  roadster: PropTypes.PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  })
};

export default Roadster;
