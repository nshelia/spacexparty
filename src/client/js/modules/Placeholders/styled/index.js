import styled from "styled-components";
import { StyledLaunchImage } from "modules/Launch/styled";

export const StyledLaunchPlaceholderImage = styled(StyledLaunchImage)`
  height: 130px;
  width: 120px;
  background: rgba(31, 39, 43);
`;

export const StyledLaunchPlaceholderRow = styled.div`
  background: ${(props) => props.theme.darkGrey};
  margin-bottom: 10px;

  &:first-child {
    width: 40%;
    height: 10px;
  }

  &:last-child {
    width: 70%;
    height: 10px;
  }
`;

export const StyledLaunchPlaceholderDetails = styled.div`
  padding: 10px;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  p { text-align: center; }
`;
