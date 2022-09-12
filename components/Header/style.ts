import styled from "styled-components";
import { device } from "../../styles/media";

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background: ${({ theme }) => theme.colors.bg};
  z-index: 11;
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  z-index: 999;
  font-weight: ${({ theme }) => theme.font.weight.black};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.copy};
  }
  @media ${device.laptop} {
    display: none;
  }
`;

type NavigationProps = {
  toggled: boolean;
};

export const Navigation = styled.nav<NavigationProps>`
  transition: all 0.2s ease-in-out;
  opacity: ${({ toggled }) => (toggled ? 1 : 0)};
  visibility: ${({ toggled }) => (toggled ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  z-index: 10;
  padding: 3.5rem 1rem 1rem 1rem;

  @media ${device.laptop} {
    transition: none;
    position: initial;
    opacity: 1;
    padding: 0;
    width: initial;
    height: initial;
    display: inline-block;
    margin: 0 auto;
    visibility: initial;
  }
`;

export const NavigationUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media ${device.laptop} {
    display: inline-grid;
    grid-gap: 3rem;
    align-items: center;
    grid-template-columns: auto auto auto auto auto;
  }

  li {
    margin-bottom: 0.75rem;

    @media ${device.laptop} {
      margin-bottom: 0;
    }
  }
`;

export const HomeLi = styled.li`
  display: none;

  @media ${device.laptop} {
    display: initial;
  }

  a {
    padding: 0 1rem;
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.font.weight.black};
  }
`;

export const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 1.25rem;
  width: 100%;
  padding: 0;
  font-weight: ${({ theme }) => theme.font.weight.thin};
  color: ${({ theme }) => theme.colors.copy};

  @media ${device.laptop} {
    font-size: 1rem;
    width: initial;
  }
`;
