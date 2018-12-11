import styled from "styled-components";
import { Loader } from "shared/styled/Loader";

export const StyledLoader = styled(Loader)`
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
`;
export const StyledOverlay = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;
`;
