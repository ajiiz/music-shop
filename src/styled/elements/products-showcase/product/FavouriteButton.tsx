import styled from "styled-components";
import { LightBlueColor, RedColor } from "styled/base/Colors";

type FavouriteButtonProps = {
  isFavourite: boolean;
};

export const FavouriteButton = styled.span<FavouriteButtonProps>`
  width: fit-content;
  transition: color 0.1s linear;
  margin-left: 5%;
  font-size: 0.9em;
  cursor: pointer;
  color: ${props => (props.isFavourite ? RedColor : "inherit")};

  &:hover,
  &:focus,
  &:focus-visible,
  &:focus-within {
    color: ${LightBlueColor};
  }
`;
