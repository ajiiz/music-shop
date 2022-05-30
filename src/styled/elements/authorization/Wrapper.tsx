import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  ${device.mobile} {
    height: fit-content;
    margin: 0 0 5vh 0;
  }
`;
