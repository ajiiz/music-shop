import styled from "styled-components";
import { BlackColor, WhiteColor } from "styled/base/Colors";

export const AccountSettingsItem = styled.li`
  height: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-size: 0.7em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color, background-color 0.1s linear;
  background-color: ${WhiteColor};

  &:hover,
  &:focus,
  &:focus-visible {
    color: ${WhiteColor};
    background-color: ${BlackColor};
  }
`;
