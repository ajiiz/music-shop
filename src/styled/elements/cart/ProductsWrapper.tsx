import styled from "styled-components";
import { GrayColor } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const ProductsWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: 2em 0 2em 2em;
  border-bottom: 1px solid ${GrayColor};

  ${device.smalldesktop} {
    width: 80%;
  }

  ${device.mobile} {
    width: 85%;
    padding: 2em 0 2em 0;
  }
`;
