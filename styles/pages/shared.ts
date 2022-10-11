import styled from "styled-components";
import { device } from "../media";

export const PageGrid = styled.div`
  display: inline-block;
  position: relative;
  z-index: 9;
  width: 100%;
  padding-bottom: 3rem;
  min-height: calc(100vh - 3.5rem - 3.755rem);

  @media ${device.laptop} {
    min-height: calc(100vh - 4.625rem - 3.755rem);
  }
`;

export const Title = styled.h1`
  margin: 1rem 0;
`;

export const Container = styled.div`
  padding: 0 1rem;
  max-width: 60rem;
  margin: 0 auto;
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  grid-gap: 1rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${device.desktop} {
    grid-gap: 2rem;
  }
`;

export const Post = styled.div`
  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
    letter-spacing: 0.01rem;
  }

  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    border-bottom: 0.125rem solid ${({ theme }) => theme.colors.main};
  }
`;
