import styled from "styled-components";

export const StyledLaunch = styled.div`
  display: flex;
  overflow: hidden;
  min-height: 130px;
  background: #181c1f;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 0 rgba(31, 39, 43);
`;
export const StyledLaunchImage = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
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
