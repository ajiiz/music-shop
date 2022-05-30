import styled from "styled-components";
import { LightBlueColor, LightPinkColor, WhiteColor } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const Button = styled.button`
  width: 50%;
  padding: 1em 3em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9em;
  color: ${WhiteColor};
  background-image: linear-gradient(to right, ${LightBlueColor} 0%, ${LightBlueColor} 51%, ${LightPinkColor} 100%);
  background-size: 200% auto;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover,
  &:focus {
    background-position: right center;
    text-decoration: none;
    color: ${WhiteColor};
    padding: 1em 3em;
  }

  ${device.smalldesktop} {
    width: 100%;
  }
`;
