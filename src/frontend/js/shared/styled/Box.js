import styled from 'styled-components'

export const Box = styled.div`
	position: relative;
  padding: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.boxColor};
`
export const BoxInner = styled(Box)`
  background: ${(props) => props.theme.black};
`

export const BoxBlockHeader = styled(Box)`
	box-shadow: 0px 3px 0px ${(props) => props.theme.boxShadowLight};
	margin-bottom: 10px;
	font-weight: bold;
`