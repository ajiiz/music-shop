import styled from "styled-components";
import { WhiteColor, BlackColor } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const DialogButton = styled.button`
  width: 25%;
  padding: 1em 0em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8em;
  color: ${WhiteColor};
  background-color: ${BlackColor};
  border: 1px solid ${BlackColor};
  cursor: pointer;
  align-self: center;
  transition: 0.5s;

  &:hover {
    background-color: ${WhiteColor};
    border: 1px solid ${BlackColor};
    text-decoration: none;
    color: ${BlackColor};
    padding: 1em 0em;
  }

  &:focus {
    color: ${WhiteColor};
    background-color: ${BlackColor};
    border: 1px solid ${WhiteColor};
    text-decoration: none;
    padding: 1em 0em;
  }

  ${device.mobile} {
    width: 100%;
    padding: 0.8em 0em;
    margin: 1em 0 1.5em 0;
  }
`;
