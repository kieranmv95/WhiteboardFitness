import styled from "styled-components";

export const MiniBlogCardWrapper = styled.div`
  cursor: pointer;
`;

export const ImageHolder = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  z-index: -1;
`;

export const Title = styled.h2`
  font-size: 1rem;
  line-height: 1.15;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0.5rem 0 0 0;
`;

export const Detail = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
  line-height: 1.25;
`;
