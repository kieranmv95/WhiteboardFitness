import styled from "styled-components";

type ButtonProps = {
  fullWidth?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 0.5rem 0.75rem;
  border: none;
  outline: none;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:active,
  &:focus {
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.secondaryLight};
  }
`;
