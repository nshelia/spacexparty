import styled from "styled-components";

export const StyledButton = styled.button`
  border:none;
  font-weight:bold;
  border-radius:3px;
  background: ${props => props.theme.navigatorButtonBgColor}
  color: ${props => props.theme.navigatorButtonColor}
  padding:15px;
  outline:none;
`;
