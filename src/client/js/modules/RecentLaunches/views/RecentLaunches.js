import React from "react";
import PropTypes from "prop-types";
import { Launch } from "modules/Launch";
import { LaunchPlaceholder } from "modules/Placeholders";
import { Link } from 'react-router-dom'
import {
  BoxBlockHeader,
  BoxBlockHeaderButton,
  BoxBlockHeaderText 
} from "shared/styled/Box";

class RecentLaunches extends React.Component {
  static defaultProps = {
    limit: 3
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
        <BoxBlockHeader withButton>
          <BoxBlockHeaderText>
            Recent launches
          </BoxBlockHeaderText>
          <BoxBlockHeaderButton>
            <Link to="/launches">
              See more
            </Link>
          </BoxBlockHeaderButton>
        </BoxBlockHeader>
        {this.renderList()}
      </React.Fragment>
    );
  }
}

RecentLaunches.propTypes = {
  limit: PropTypes.number.isRequired,
  isFetched: PropTypes.bool.isRequired,
  clearStoreAction: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchRecentLaunchesRequestAction: PropTypes.func.isRequired
};

export default RecentLaunches;
