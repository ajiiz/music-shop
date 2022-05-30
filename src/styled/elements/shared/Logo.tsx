import styled from "styled-components";
import { Property } from "csstype";

type LogoProps = {
  fontSize?: Property.FontSize;
  width?: Property.Width;
  cursor?: Property.Cursor;
  margin?: Property.Margin;
};

export const Logo = styled.h1<LogoProps>`
  width: ${props => (props.width ? props.width : "100%")};
  font-size: ${props => (props.fontSize ? props.fontSize : "4.5em")};
  cursor: ${props => (props.cursor ? props.cursor : "auto")};
  margin: ${props => props.margin || props.margin};
  user-select: none;
  text-align: center;
  font-family: AlluraRegular;
`;
