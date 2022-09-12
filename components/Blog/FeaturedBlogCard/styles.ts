import styled from "styled-components";
import { device } from "../../../styles/media";

export const FeaturedBlogCardWrapper = styled.div`
  display: grid;
  margin-left: -1rem;
  width: calc(100% + 2rem);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.bg};

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    min-height: 22.5rem;
    margin-left: 0;
    width: 100%;
  }
`;

export const ImageHolder = styled.div`
  width: 100%;
  position: relative;
  height: 17.5rem;
  z-index: -1;
  @media ${device.tablet} {
    height: 20rem;
  }
  @media ${device.laptop} {
    height: 100%;
  }
`;

export const ContentHolder = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 3rem 1rem;
  text-align: center;

  @media ${device.laptop} {
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  margin: 0 0 1rem 0;
`;

export const Description = styled.p`
  margin: 0 0 1rem 0;
`;

export const Author = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  font-size: 0.8rem;
`;
