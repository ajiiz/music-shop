import styled from "styled-components";

type ProductDetailsProps = {
  isShown: boolean;
};

export const ProductDetails = styled.span<ProductDetailsProps>`
  font-size: 0.7em;
  display: ${props => (props.isShown ? "" : "none")};
`;
