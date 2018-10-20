import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default class Launch extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      mission_name: PropTypes.string.isRequired,
      links: PropTypes.shape({ mission_patch: PropTypes.string }).isRequired
    })
  }

  render() {
    const { item } = this.props
    const style = { boxShadow: `0px 3px 0px rgba(${_.random(5,45)},39,43)` }

    return (
      <div
        className="launch fade-ready"
        style={style}
      >
        <div className="launch-image" >
          <img src={item.links.mission_patch} />
        </div>
        <div className="launch-details">
          <h3>
            {item.mission_name}
          </h3>
          <p>
            {item.details}
          </p>
        </div>
      </div>
    )
  }
}