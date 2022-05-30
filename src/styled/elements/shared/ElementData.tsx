import styled from "styled-components";
import { Property } from "csstype";
import { device } from "styled/base/Responsive";

interface ElementDataProps {
  width: Property.Width;
  mobileWidth?: Property.Width;
}

export const ElementData = styled.div<ElementDataProps>`
  width: ${props => props.width};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.8em;
  font-family: "LatoLight";
  font-weight: bold;

  ${device.smalldesktop} {
    width: ${props => (props.mobileWidth ? props.mobileWidth : "25%")};
  }

  ${device.mobile} {
    font-size: 0.7em;
  }
`;
