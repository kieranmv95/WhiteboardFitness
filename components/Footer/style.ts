import styled from "styled-components";

export const Footer = styled.footer`
  padding: 1rem 0;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.bg};
`;

export const Brand = styled.h3`
  margin: 0;
`;
