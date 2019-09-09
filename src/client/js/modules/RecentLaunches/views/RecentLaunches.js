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
    limit: 2
  };

  componentDidMount() {
    this.props.fetchRecentLaunchesRequestAction(2)
  }

  renderList() {
    if (this.props.isFetched) {
      return this.props.data.map((item, index) => {
        return (
          <Launch
            url={item.links.video_link}
            image={item.links.mission_patch_small}
            title={item.mission_name}
            details={item.details}
            key={index}
          />
        )
      });
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
          <Link to="/launches">
            <BoxBlockHeaderButton>
              See more
            </BoxBlockHeaderButton>
          </Link>
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
