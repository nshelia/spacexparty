import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "modules/Carousel";
import { BoxBlockHeader } from "shared/styled/Box";
import { Loader } from "shared/styled/Loader";

class MissionsAll extends React.Component {
  componentDidMount() {
    this.props.fetchMissionsRequestAction()
  }

  renderCarousels() {
    if (this.props.isFetched) {
      return this.props.data.map((item, index) => {
        return (
          <Carousel
            key={index}
            items={item.payload_ids}
            title={item.mission_name}
          />
        )
      })
    }

    return <Loader top={200} />;

  }

  render() {
    return (
      <React.Fragment>
        <BoxBlockHeader>Missions</BoxBlockHeader>
        {this.renderCarousels()}
      </React.Fragment>
    );
  }
}

MissionsAll.propTypes = {
  isFetched: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchMissionsRequestAction: PropTypes.func.isRequired
};

export default MissionsAll;
