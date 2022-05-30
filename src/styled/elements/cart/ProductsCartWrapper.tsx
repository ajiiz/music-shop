import styled from "styled-components";
import { Property } from "csstype";

type ProductsCartWrapperProps = {
  padding?: Property.Padding;
  cursor?: Property.Cursor;
};

export const ProductsCartWrapper = styled.div<ProductsCartWrapperProps>`
  width: 100%;
  display: flex;
  padding: ${props => (props.padding ? props.padding : "0em 0 2em 0em")};
  cursor: ${props => (props.cursor ? props.cursor : "auto")};
`;
