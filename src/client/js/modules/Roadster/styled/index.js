import styled, { css } from "styled-components";
import { Box, StyledOverlay } from "shared/styled/Box";
import { fadeIn } from 'shared/styled/FadeReady'

export const StyledRoadsterImages = styled(Box)`
  display: flex;
  position: relative;
  height: 370px;
  
  img {
    width: 100%;
    object-fit: cover;
    height: 350px;
  }
`;

export const StyledRoadsterOverlay = styled(StyledOverlay)`
  display: flex;

  align-items: center;
  padding: 30px;
  flex-direction: column;
  p {
    font-size: 14px;
  }
`

const animation = props =>
  css`
    ${fadeIn} 0.3s forwards;
  `


export const StyledFadedImage = styled.img`
  animation: ${props => props.imageLoaded ? animation : 'none'};
`