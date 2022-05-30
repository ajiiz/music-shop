import styled from "styled-components";
import { LightBlueColor, LightPinkColor } from "styled/base/Colors";

export const Link = styled.a`
  font-family: LatoBold;
  color: ${LightBlueColor};
  transition: color 0.5s;

  &:hover {
    color: ${LightPinkColor};
  }
`;
