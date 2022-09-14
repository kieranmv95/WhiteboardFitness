import styled from "styled-components";

type ButtonProps = {
  fullWidth?: boolean;
  disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  background: ${({ theme, disabled }) =>
    !disabled ? theme.colors.secondary : theme.colors.disabled};
  color: ${({ theme, disabled }) =>
    !disabled ? theme.colors.bg : theme.colors.copy};
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
