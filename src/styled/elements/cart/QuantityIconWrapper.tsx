import styled from "styled-components";
import { Property } from "csstype";

type QuantityIconWrapperProps = {
  margin?: Property.Margin;
};
export const QuantityIconWrapper = styled.div<QuantityIconWrapperProps>`
  margin: ${props => props.margin || props.margin};
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
