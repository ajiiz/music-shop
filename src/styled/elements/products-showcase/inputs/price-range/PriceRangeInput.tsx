import styled from "styled-components";
import { GrayColor, LightGrayColor } from "styled/base/Colors";

export const PriceRangeInput = styled.input`
  height: 100%;
  width: 100%;
  display: flex;
  font-size: 0.9em;
  font-family: LatoRegular;
  border: 1px solid ${GrayColor};
  border-right: none;
  transition: 0.2s border linear;
  padding-left: 1em;

  &::placeholder {
    color: ${LightGrayColor};
  }

  &:focus,
  &:hover {
    border: 1px solid ${GrayColor};
    border-right: none;
  }
`;
