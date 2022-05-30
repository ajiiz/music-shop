import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const ButtonWrapper = styled.div`
  width: 50%;
  font-size: 0.8em;

  ${device.smalldesktop} {
    width: 100%;
  }
`;
