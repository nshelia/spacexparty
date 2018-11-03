import React from 'react'
import { connect } from "react-redux";
import { moduleName } from '../config'
import {
  fetchMissionsAction,
  clearStoreAction
} from '../actions'
import PropTypes from 'prop-types'
import { Launch } from 'components/Launch'
import LaunchPlaceholder from 'components/Placeholders/Launch'

class MissionsAll extends React.Component {
  static defaultProps = {
    limit: 10
  }

  componentWillUnmount() {
    this.props.clearStoreAction()
  }

  componentDidMount() {
    this.props.fetchMissionsAction(this.props.limit)
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


          Launches
        </div>
        {this.renderList()}
      </React.Fragment>
    )
  }
}

MissionsAll.propTypes = {
  limit: PropTypes.number.isRequired,
  isFetched: PropTypes.bool.isRequired,
  clearStoreAction: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fetchMissionsAction: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => state[moduleName]


const mapDispatchToProps = {
  fetchMissionsAction,
  clearStoreAction
}

export default connect(mapStateToProps,mapDispatchToProps)(MissionsAll)
