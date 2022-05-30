import styled from "styled-components";
import { Property } from "csstype";
import { device } from "styled/base/Responsive";

type FormContainerProps = {
  height?: Property.Height;
};

export const FormContainer = styled.div<FormContainerProps>`
  width: 30%;
  height: ${props => (props.height ? props.height : "75%")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.smalldesktop} {
    width: 50%;
  }

  ${device.tablet} {
    width: 100%;
  }
`;
