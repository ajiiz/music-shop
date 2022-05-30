import styled from "styled-components";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
};

export const StyledAlert = styled(Alert)`
  button,
  button:hover,
  button:focus {
    padding: 3px;
  }
`;
