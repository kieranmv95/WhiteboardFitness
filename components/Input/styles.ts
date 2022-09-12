import styled from "styled-components";

type InputProps = {
  fullWidth?: boolean;
};

export const Input = styled.input<InputProps>`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  box-shadow: inset 0 0 0 0.0625rem ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  background: ${({ theme }) => theme.colors.bgLight};
  color: ${({ theme }) => theme.colors.copy};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 0.5rem 0.75rem;

  &:active,
  &:focus {
    box-shadow: inset 0 0 0 0.0625rem ${({ theme }) => theme.colors.secondary},
      0 0 0 0.0625rem ${({ theme }) => theme.colors.secondaryLight};
  }
`;
