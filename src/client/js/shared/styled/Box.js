import styled from "styled-components";
import { StyledButton } from './Button'

export const Box = styled.div`
  position: relative;
  padding: 10px 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.boxColor};
`;
export const BoxInner = styled(Box)`
  background: ${(props) => props.theme.black};
`;

export const BoxBlockHeader = styled(Box)`
  display:flex;
  box-shadow: 0 3px 0 ${(props) => props.theme.boxShadowLight};
  margin-bottom: 10px;
  font-weight: bold;
  justify-content:space-between;
  align-items:center;
  padding:${props => props.withButton ? '0 0 0 10px' : '10px' };
`;


export const BoxBlockHeaderButton = styled(StyledButton)`
 
`
export const BoxBlockHeaderText = styled.span`
  
`

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`