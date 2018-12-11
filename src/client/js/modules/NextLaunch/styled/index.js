import styled from "styled-components";
import { Box, BoxInner } from "shared/styled/Box";

export const StyledNextLaunchBox = styled(Box)`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > span { display: block; }
`;

export const StyledNextLaunchCountdown = styled(BoxInner)`
  min-height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCountdown = styled.span`
  color: ${(props) => props.theme.blue};
  font-size: 30px;
`;
