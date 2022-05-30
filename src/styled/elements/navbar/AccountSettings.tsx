import styled from "styled-components";
import { LightBlueColor } from "styled/base/Colors";

export const AccountSettings = styled.button`
  font-size: 0.9em;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 1em;
  transition: color 0.1s linear;

  &:hover,
  &:focus,
  &:focus-visible,
  &:focus-within {
    color: ${LightBlueColor};
  }
`;
