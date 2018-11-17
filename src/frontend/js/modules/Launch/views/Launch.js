import React from 'react'
import PropTypes from 'prop-types'
import { StyledLaunch, StyledLaunchImage, StyledLaunchDetails } from '../styled'

export default class Launch extends React.PureComponent {
  renderLaunchImage() {
    const { item } = this.props

    if (item.links) {
      return <StyledLaunchImage className="d-flex align-items-center justify-content-center">
        <img src={item.links.mission_patch} alt={item.mission_name} />
      </StyledLaunchImage>
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

    return (
      <StyledLaunch className="d-flex">
        {this.renderLaunchImage()}
        <StyledLaunchDetails className="flex-grow-1 d-flex align-items-center justify-content-center flex-column">
          <h3>
            {item.mission_name}
          </h3>
          {this.renderLaunchDetails()}
        </StyledLaunchDetails>
      </StyledLaunch>
    )
  }
}

Launch.propTypes = {
  item: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    links: PropTypes.shape({ mission_patch: PropTypes.string.isRequired })
  })
}