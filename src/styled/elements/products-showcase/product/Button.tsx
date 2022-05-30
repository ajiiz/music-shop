import styled from "styled-components";
import { DarkGreenColor, LightBlueColor } from "styled/base/Colors";

export const Button = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${DarkGreenColor};
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${LightBlueColor};
  }
`;
