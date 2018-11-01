import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default class Launch extends React.PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      mission_name: PropTypes.string.isRequired,
      links: PropTypes.shape({ mission_patch: PropTypes.string.isRequired })
    })
  }

  renderLaunchImage() {
    const { item } = this.props

    if (item.links) {
      return <div className="launch-image" >
        <img src={item.links.mission_patch} alt={item.mission_name} />
      </div>
    }

    return null

  }

  renderLaunchDetails() {
    const { item } = this.props
    const details = item.details || item.description


    return <p>{details}</p>
  }

  render() {
    const { item } = this.props
    const style = { boxShadow: `0px 3px 0px rgba(${_.random(5,45)},39,43)` }

    return (
      <div
        className="launch fade-ready"
        style={style}
      >
        {this.renderLaunchImage()}
        <div className="launch-details">
          <h3>
            {item.mission_name}
          </h3>
          {this.renderLaunchDetails()}
        </div>
      </div>
    )
  }
}