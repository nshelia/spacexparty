import React from "react";
import PropTypes from "prop-types";
import { Launch } from "modules/Launch";
import { LaunchPlaceholder } from "modules/Placeholders";
import { BoxBlockHeader } from "shared/styled/Box";

class MissionsAll extends React.Component {
  static defaultProps = {
    limit: 10
  };

  renderList() {
    if (this.props.isFetched) {
      return this.props.data.map((item, index) => <Launch key={index} item={item} />);
    }

    return <LaunchPlaceholder count={this.props.limit} />;
  }

  render() {
    return (
      <React.Fragment>
        <BoxBlockHeader>Missions</BoxBlockHeader>
        {this.renderList()}
      </React.Fragment>
    );
  }
}

MissionsAll.propTypes = {
  limit: PropTypes.number.isRequired,
  isFetched: PropTypes.bool.isRequired,
  clearStoreAction: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchMissionsRequestAction: PropTypes.func.isRequired
};

export default MissionsAll;
