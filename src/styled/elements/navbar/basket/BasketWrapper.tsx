import styled from "styled-components";
import { LightBlueColor } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const BasketWrapper = styled.button`
  cursor: pointer;
  user-select: none;
  margin: 0 2em;
  transition: all 0.1s linear;

  &:hover,
  &:focus,
  &:focus-visible,
  &:focus-within {
    color: ${LightBlueColor};
    filter: invert(44%) sepia(97%) saturate(873%) hue-rotate(144deg) brightness(101%) contrast(101%);
  }

  ${device.mobile} {
    margin: 0 0.5em;
  }
`;
