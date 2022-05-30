import styled from "styled-components";
import { Property } from "csstype";

type WrapperProps = {
  width: Property.Width;
  display?: Property.Display;
};

export const Wrapper = styled.div<WrapperProps>`
  width: ${props => props.width};
  display: ${props => (props.display ? props.display : "border-box")};
`;
