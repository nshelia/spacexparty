import styled, { css } from "styled-components";
import { Box, StyledOverlay } from "shared/styled/Box";
import { fadeIn } from 'shared/styled/FadeReady'

export const StyledVehicle = styled(Box)`
  display: flex;
  position: relative;
  min-height:150px;
  max-height: 350px;
  margin-bottom:20px;
  padding:0;
  border-radius: 5px;
  overflow:hidden;
  @media (max-width: 992px) {
    height: 150px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledVehicleOverlay = styled(StyledOverlay)`
  display: flex;
  align-items: center;
  padding: 30px;
  padding-bottom:0px;
  flex-direction: column;
  @media (max-width: 992px) {
    padding:0;
    justify-content:center;
    p {
      display:none;
    }
  }
  p {
    font-size: 14px;
  }
`
const animation = () => css`
    ${fadeIn} 0.3s forwards;
  `


export const StyledFadedImage = styled.img`
  animation: ${(props) => {
    return props.imageLoaded ? animation : 'none'
  }};
`