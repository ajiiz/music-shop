import styled from "styled-components";
import { device } from "styled/base/Responsive";
import { motion } from "framer-motion";

type AccountSettingsPopupProps = {
  isPopupOpen: boolean;
};

export const AccountSettingsPopup = styled(motion.div)<AccountSettingsPopupProps>`
  pointer-events: ${props => (props.isPopupOpen ? "all" : "none")};
  opacity: ${props => (props.isPopupOpen ? "1" : "0")};
  position: absolute;
  width: 15vw;
  height: 12vh;
  top: 8vh;
  right: 15em;
  z-index: 999;
  transition: opacity 0.1s linear;
  border: 1px solid black;
  border-bottom: none;

  ${device.tablet} {
    width: 25vw;
    right: 7em;
  }

  ${device.mobile} {
    width: 50vw;
    height: 15vh;
    right: 2em;
    top: 10vh;
  }
`;

export const animationVariants = {
  open: { opacity: 1, y: 0 },
  closed: {
    opacity: 0,
    y: "50%"
  }
};
