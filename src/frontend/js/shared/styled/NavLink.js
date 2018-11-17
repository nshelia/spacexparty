import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavLink = styled(Link)`
	color: ${(props) => props.theme.gray};
	font-size:18px;
	margin-right:20px;
	&.current {
		color: ${(props) => props.theme.blue};
	}
`