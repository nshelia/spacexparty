import styled from "styled-components";

export const StyledButton = styled.button`
  border:none;
  font-weight:bold;
  border-radius:3px;
  background: ${props => props.theme.blue}
  color: ${props => props.theme.white}
  padding: ${props => "10px"};
  outline:none;
  cursor:pointer;
`;
