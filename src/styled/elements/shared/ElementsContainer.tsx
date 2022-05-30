import styled from "styled-components";
import { Property } from "csstype";
import { device } from "styled/base/Responsive";

interface ElementsContainerProps {
  minHeight?: Property.MinHeight;
}

export const ElementsContainer = styled.div<ElementsContainerProps>`
  width: 100%;
  min-height: ${props => props.minHeight || props.minHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0 3em 0;

  ${device.smalldesktop} {
    margin: 2em 0 2em 0;
  }

  ${device.mobile} {
    margin: 1em 0 1em 0;
  }
`;
