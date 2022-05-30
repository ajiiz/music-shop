import styled from "styled-components";
import { LightGreenColor } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const BasketActionsWrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  padding-left: 5%;
  margin: 1em 0 1em 0;
  font-size: 1.1em;
  background-color: ${LightGreenColor};

  ${device.mobile} {
    font-size: 1em;
  }
`;
