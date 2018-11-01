import React from 'react'
import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchRecentLaunchesAction,
  clearStoreAction
} from '../actions'
import PropTypes from 'prop-types'
import { Launch } from 'components/Launch'
import LaunchPlaceholder from 'components/Placeholders/Launch'

class RecentLaunches extends React.Component {
  static defaultProps = {
    limit: 3
  }

  componentWillUnmount() {
    this.props.clearStoreAction()
  }

  componentDidMount() {
    this.props.fetchRecentLaunchesAction(this.props.limit)
  }

  renderList() {
    if (this.props.isFetched) {

      return this.props.data.map((item,index) => <Launch key={index}
        item={item} />)
    }

    return <LaunchPlaceholder count={this.props.limit} />

  }

  render() {
    return (
      <React.Fragment>
        <div className="box block-header">


          Recent launches
        </div>
        {this.renderList()}
      </React.Fragment>
    )
  }
}

RecentLaunches.propTypes = {
  limit: PropTypes.number.isRequired,
  isFetched: PropTypes.bool.isRequired,
  clearStoreAction: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchRecentLaunchesAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state[moduleName]


const mapDispatchToProps = {
  fetchRecentLaunchesAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(RecentLaunches)
