import styled from 'styled-components'
import { Box, BoxInner } from 'shared/styled/Box'

export const StyledNextLaunchBox = styled(Box)`
	width:100%;
	margin-bottom:10px;
	animation: fade-in 0.2s forwards; 
	> span {
		display:block;
	}
`

export const StyledNextLaunchCountdown = styled(BoxInner)`
	min-height:85px;
`

export const StyledCountdown = styled.span`
	color: ${(props) => props.theme.blue};
	font-size:30px;
`