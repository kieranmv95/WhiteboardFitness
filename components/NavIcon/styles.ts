import styled from "styled-components";
import { device } from "../../styles/media";

type NavIconProps = {
  toggled: boolean;
};

export const NavIcon = styled.div<NavIconProps>`
  position: relative;
  display: inline-block;
  width: 1.8rem;
  height: 1.3rem;
  z-index: 999;
  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }

  span {
    position: absolute;
    left: 0;
    width: 1.8rem;
    height: 0.125rem;
    background: ${({ theme }) => theme.colors.copy};
    border-radius: ${({ theme }) => theme.borderRadius.rounded};
    transition: all 0.2s ease-in-out;
    transform-origin: center center;

    @media ${device.laptop} {
      transition: none;
    }

    &:nth-child(1) {
      top: ${({ toggled }) => (!toggled ? "0" : "calc(50% - 0.0625rem)")};
      transform: ${({ toggled }) =>
        toggled ? "rotate(45deg)" : "rotate(0deg)"};
    }
    &:nth-child(2) {
      top: calc(50% - 0.0625rem);
      opacity: ${({ toggled }) => (toggled ? 0 : 1)};
    }
    &:nth-child(3) {
      bottom: ${({ toggled }) => (!toggled ? "0" : "calc(50% - 0.0625rem)")};
      transform: ${({ toggled }) =>
        toggled ? "rotate(-45deg)" : "rotate(0deg)"};
    }
  }
`;
