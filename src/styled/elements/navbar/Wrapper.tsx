import styled from "styled-components";
import { device } from "styled/base/Responsive";
import { GrayColor } from "styled/base/Colors";

export const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10em;
  border-bottom: 1px solid ${GrayColor};

  ${device.tablet} {
    padding: 0 2em;
  }

  ${device.mobile} {
    padding: 0 1em;
  }
`;
