import React from "react";
import { Launch } from 'modules/Launch'
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet'
import { BoxBlockHeader } from "shared/styled/Box";
import { LaunchPlaceholder } from "modules/Placeholders";

class Vehicles extends React.Component {
  renderShips() {
    if (this.props.isFetched) {
      return this.props.ships.map((item,index) => {
        return (
          <Launch
            title={item.ship_name}
            details={item.home_port}
            image={item.image}
            key={index}
          />
        )
      })
    }
  }

  renderRockets() {
    if (this.props.isFetched) {
      return this.props.rockets.reverse().map((item,index) => {
        return (
          <Launch
            title={item.rocket_name}
            details={item.description}
            image={item.flickr_images[0]}
            key={index}
          />
        )
      })
    }
  }

  renderRoadster() {
    if (this.props.isFetched) {
      const { roadster: item } = this.props


      return (
        <Launch
          title={item.name}
          details={item.details}
          image={item.flickr_images[0]}
        />
      )
    }
  }
  renderPlaceholders() {
    if (!this.props.isFetched) {
      return <LaunchPlaceholder count={10} />;
    }
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Vehicles</title>
        </Helmet>
        <BoxBlockHeader>Vehicles</BoxBlockHeader>
        {this.renderPlaceholders()}
        {this.renderRoadster()}
        {this.renderRockets()}
        {this.renderShips()}
      </React.Fragment>
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
