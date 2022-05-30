import styled from "styled-components";
import { Property } from "csstype";
import { device } from "styled/base/Responsive";

interface ImageWrapperProps {
  width?: Property.Width;
  height?: Property.Height;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
  display: flex;

  ${device.smalldesktop} {
    width: 50%;
  }

  ${device.tablet} {
    display: none;
  }
`;
