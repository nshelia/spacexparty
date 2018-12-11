import styled from "styled-components";
import Falcon9 from "falcon9.jpg";

export const StyledHeader = styled.header`
  background: url(${Falcon9});
  border-radius: 0 0 5px 5px;
  padding: 20px 0 2px 20px;
  margin-bottom: 20px;
`;
export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px;

  a { text-decoration: none; }
`;
