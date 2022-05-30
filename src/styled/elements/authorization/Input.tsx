import styled from "styled-components";
import { BlackColor, DarkerGrayColor, LightGrayColor } from "styled/base/Colors";

export const Input = styled.input`
  width: 100%;
  margin: 0.5em 0;
  display: flex;
  padding: 1em 0 1em 1em;
  font-size: 0.8em;
  border: 1px solid ${DarkerGrayColor};
  transition: 0.2s border linear;

  &::placeholder {
    color: ${LightGrayColor};
  }

  &:focus,
  &:hover {
    border: 1px solid ${BlackColor};
  }
`;
