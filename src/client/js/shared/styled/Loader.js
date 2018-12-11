import styled from "styled-components";
import Spinner from "tail-spin.svg";

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  background: url(${Spinner}) no-repeat;
  background-size: 50px 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
