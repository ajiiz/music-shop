import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const ProductPrice = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  font-size: 1.2em;

  ${device.mobile} {
    font-size: 0.9em;
  }
`;
