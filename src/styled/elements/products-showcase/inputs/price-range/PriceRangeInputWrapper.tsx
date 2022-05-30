import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const PriceRangeInputWrapper = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${device.smalldesktop} {
    width: 20%;
  }

  ${device.mobile} {
    width: 30%;
  }
`;
