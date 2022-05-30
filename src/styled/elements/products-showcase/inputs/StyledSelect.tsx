import styled from "styled-components";
import Select from "react-select";
import { device } from "styled/base/Responsive";
import { Property } from "csstype";
import { BlackColor, GrayColor, WhiteColor, LightGrayColor } from "styled/base/Colors";

type StyledSelectProps = {
  width?: Property.Width;
};

export const StyledSelect = styled(Select)<StyledSelectProps>`
  width: ${props => (props.width ? props.width : "20%")};
  height: 100%;
  margin-right: 2em;

  ${device.smalldesktop} {
    width: ${props => (props.width ? props.width : "40%")};
  }

  ${device.mobile} {
    width: ${props => (props.width ? props.width : "50%")};
    margin-right: 0.5em;
  }
`;

export const customSelectStyles = {
  placeholder: (styles: any) => ({ ...styles, color: LightGrayColor }),
  control: (styles: any) => ({ ...styles, fontSize: "0.9em", backgroundColor: WhiteColor, borderColor: GrayColor, borderRadius: "0px", height: "100%", color: GrayColor, minHeight: "none" }),
  option: (styles: any) => ({
    ...styles,
    fontSize: "0.9em",
    color: BlackColor,
    backgroundColor: WhiteColor,
    cursor: "pointer",
    "&:hover": {
      background: GrayColor
    }
  })
};
