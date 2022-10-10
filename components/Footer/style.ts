import styled from "styled-components";

export const Footer = styled.footer`
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.bg};
`;

export const Brand = styled.h3`
  margin: 0;
`;

export const Links = styled.ul`
  list-style-type: none;
  margin: 1 0 0 0;
  padding: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.bg};
  display: block;
  padding: 0.1rem 0;
`;
