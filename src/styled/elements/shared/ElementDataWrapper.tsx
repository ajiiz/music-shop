import styled from "styled-components";
import { Property } from "csstype";
import { GrayColor } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

type ElementDataWrapperProps = {
  width: Property.Width;
  borderTop?: Property.BorderTop;
};

export const ElementDataWrapper = styled.div<ElementDataWrapperProps>`
  width: ${props => props.width};
  display: flex;
  padding: 2em 0 2em 2em;
  border-top: ${props => (props.borderTop ? props.borderTop : "1px solid")};
  border-bottom: 1px solid;
  border-color: ${GrayColor};

  ${device.smalldesktop} {
    width: 80%;
  }

  ${device.mobile} {
    width: 85%;
    padding: 2em 0 2em 0;
  }
`;
