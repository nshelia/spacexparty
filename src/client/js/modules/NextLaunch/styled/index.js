import styled from "styled-components";
import { LightBox, BoxInner } from "shared/styled/Box";
import { pulse } from 'shared/styled/Pulse'

export const StyledNextLaunchBox = styled(LightBox)`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:0;
  > span { display: block; }
`;

export const StyledNextLaunchCountdown = styled(BoxInner)`
  min-height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(${props => props.theme.blue},${props => props.theme.black})
`;

export const StyledCountdown = styled.span`
  color: ${(props) => props.theme.white};
  font-size: 40px;
  animation: ${pulse} 3s ease-in infinite;
`;

export const StyledNextLaunchDetails = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:20px;
`

export const Label = styled.div`
  display:flex;
  align-items: center;
  a {
    margin-right:10px;
    color: ${props => props.theme.blue};
    text-decoration:underline;
  }
` 