import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const Header = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  margin: 1.2em 0;
  font-family: "LatoLight";

  ${device.mobile} {
    font-size: 2em;
    margin: 1em 0;
  }
`;
