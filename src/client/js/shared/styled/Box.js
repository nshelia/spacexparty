import styled, { css } from "styled-components";
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
  padding:${(props) => props.withButton ? '0 0 0 10px' : '10px'};
`;

export const LightBox = styled(Box)`
  position: relative;
  padding: 10px 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.black};
`


export const BoxBlockHeaderButton = styled(StyledButton)`
  background: ${(props) => props.theme.navigatorButtonBgColor};
  color: ${(props) => props.theme.navigatorButtonColor};
  padding: ${(props) => props.theme.navigatorButtonPadding};
`
export const BoxBlockHeaderText = styled.span`
  ${(props) => props.red && css`
    color: ${props.theme.red}
  `}
`

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`

export const StyledPopupBox = styled.div`
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  height: 450px;
  width:750px;
  margin:auto;
  background:${(props) => props.theme.black};
  z-index:3;
  padding:20px;
`

export const StyledBoxOverlay = styled.div`
  position:fixed;
  height: 100%;
  width:100%;
  background: rgba(0,0,0,0.5);
  top:0;
  left:0;
`