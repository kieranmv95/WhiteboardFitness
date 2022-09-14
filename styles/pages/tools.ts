import styled from "styled-components";

export const ToolCard = styled.div`
  background: ${({ theme }) => theme.colors.bgLight};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 0.0625rem solid ${({ theme }) => theme.colors.secondaryLight};

  h2 {
    margin: 0;
  }
`;
