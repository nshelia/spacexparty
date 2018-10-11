import React from 'react'
import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchRecentLaunchesAction,
  clearStoreAction
} from 'components/RecentLaunches/actions'
import PropTypes from 'prop-types'
import { Launch } from 'components/Launch'

class RecentLaunches extends React.Component {
  componentWillUnmount() {
    this.props.clearStoreAction()
  }

  componentDidMount() {
    this.props.fetchRecentLaunchesAction()
  }

  renderList() {
    return this.props.data.map((item,index) => <Launch key={index} item={item}/>)
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
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchRecentLaunchesAction: PropTypes.func.isRequired,
  clearStoreAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state[moduleName]


const mapDispatchToProps = {
  fetchRecentLaunchesAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(RecentLaunches)
