import styled from "styled-components";
import { StyledButton } from 'shared/styled/Button'

export const StyledLaunch = styled.div`
  display: flex;
  overflow: hidden;
  min-height: 130px;
  background: #181c1f;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 0 rgba(31, 39, 43);
  position:relative;
`;
export const StyledLaunchImage = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius:5px;
  }
`;
export const StyledLaunchDetails = styled.div`
  padding: 10px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p { text-align: center; }
`;

export const StyledReplayButton = styled(StyledButton)`
  position:absolute;
  top:0;
  right:0;
  width: 80px;
  height:40px;
  z-index:1;
`