import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const DialogContent = styled.p`
  font-weight: lighter;
  font-size: 1.1em;
  letter-spacing: 0.05em;
  margin-bottom: 1.5em;

  ${device.mobile} {
    font-size: 0.9em;
  }
`;
