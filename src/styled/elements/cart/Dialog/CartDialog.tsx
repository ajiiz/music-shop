import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const CartDialog = styled(Dialog)`
  .MuiPaper-root {
    height: 30%;
    width: 50%;
    padding: 0.5em 5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  ${device.smalldesktop} {
    .MuiPaper-root {
      width: 80%;
    }
  }

  ${device.mobile} {
    .MuiPaper-root {
      width: 90%;
      height: fit-content;
      padding: 0.5em 1.5em;
    }
  }
`;
