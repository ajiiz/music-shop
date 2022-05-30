import styled from "styled-components";
import { GrayColor, LightGrayColor } from "styled/base/Colors";

export const Input = styled.input`
  width: 70%;
  height: 100%;
  display: flex;
  font-size: 0.9em;
  font-family: LatoRegular;
  border: 1px solid ${GrayColor};
  border-left: none;
  transition: 0.2s border linear;

  &::placeholder {
    color: ${LightGrayColor};
  }

  &:focus,
  &:hover {
    border: 1px solid ${GrayColor};
    border-left: none;
  }
`;
