import styled from 'styled-components'
import _ from 'lodash'

export const StyledLaunch = styled.div`
  overflow:hidden;
	min-height: 130px;
  background: #181c1f;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 0px rgba(${_.random(5,45)},39,43)
`
export const StyledLaunchImage = styled.div`
  padding:5px;
  img {
  	width: 120px;
  	height:120px;
  	object-fit:cover;
  }
`
export const StyledLaunchDetails = styled.div`
	padding:10px;
	p {
	    text-align:center;
	}
`
