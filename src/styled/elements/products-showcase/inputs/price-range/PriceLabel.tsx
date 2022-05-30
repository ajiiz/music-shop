import styled from "styled-components";
import { BlackColor, GrayColor } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const PriceLabel = styled.span`
  height: 100%;
  width: 20%;
  display: flex;
  font-size: 0.9em;
  font-family: LatoRegular;
  color: ${BlackColor};
  border: 1px solid ${GrayColor};
  padding-left: 1em;
  justify-content: flex-start;
  align-items: center;
  user-select: none;

  ${device.smalldesktop} {
    width: 40%;
  }

  ${device.mobile} {
    font-size: 0.6em;
  }

  &:focus,
  &:hover {
    border: 1px solid ${GrayColor};
  }
`;
