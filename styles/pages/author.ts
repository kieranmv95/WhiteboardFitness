import styled from "styled-components";
import { device } from "../media";

export const TitleContainer = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  align-items: center;
`;

export const Title = styled.h1`
  line-height: 1;
  font-size: 1.7rem;
  margin: 0;

  @media ${device.tablet} {
    font-size: 2rem;
  }

  @media ${device.desktop} {
    line-height: 1.2;
    font-size: 2.5rem;
  }
`;

export const AuthorImage = styled.div``;

export const Role = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const AuthorText = styled.div``;
