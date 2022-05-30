import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const ProductsContainer = styled.div`
  width: 75%;
  justify-content: center;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  column-gap: 4%;

  ${device.smalldesktop} {
    grid-template-columns: 40% 40%;
    column-gap: 10%;
  }

  ${device.mobile} {
    grid-template-columns: 80%;
    column-gap: 10%;
  }
`;
