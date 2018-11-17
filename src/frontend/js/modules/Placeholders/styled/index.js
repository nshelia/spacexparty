import styled from 'styled-components'
import _ from 'lodash'

export const StyledLaunchPlaceholder = styled.div`
  overflow:hidden;
  min-height: 130px;
  background: #181c1f;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 0px rgba(${_.random(5,45)},39,43)
`

export const StyledLaunchPlaceholderDetails = styled.div`
  padding:10px;
  p {
      text-align:center;
  }
`

export const StyledLaunchPlaceholderImage = styled.div`
  padding:5px;
  img {
    width: 120px;
    height:120px;
    object-fit:cover;
  }
  height:130px;
  width:120px;
`

export const StyledLaunchPlaceholderRow = styled.div`
  background:${(props) => props.theme.darkGrey};
  margin-bottom:10px;
  &:first-child {
    width:40%;
    height:10px;
  }
  &:last-child {
    width:70%;
    height:10px;
  }
`