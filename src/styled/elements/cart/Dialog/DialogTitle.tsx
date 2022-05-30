import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const DialogTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 0.4em;

  ${device.mobile} {
    font-size: 1.3em;
  }
`;
