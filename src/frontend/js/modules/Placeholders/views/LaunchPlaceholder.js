import React from 'react'
import _ from 'lodash'
import {
  StyledLaunchPlaceholder,
  StyledLaunchPlaceholderImage,
  StyledLaunchPlaceholderDetails,
  StyledLaunchPlaceholderRow
} from '../styled'

export default (props) => _.range(0,props.count).map((index) => <StyledLaunchPlaceholder className="d-flex" key={index}>
  <StyledLaunchPlaceholderImage style={{ background: `rgba(${_.random(5,45)},39,43)` }}/>
  <StyledLaunchPlaceholderDetails className="flex-grow-1 d-flex align-items-start justify-content-start flex-column">
    <StyledLaunchPlaceholderRow/>
    <StyledLaunchPlaceholderRow />
  </StyledLaunchPlaceholderDetails>
</StyledLaunchPlaceholder>)
