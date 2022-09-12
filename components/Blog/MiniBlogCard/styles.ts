import styled from "styled-components";
import { device } from "../../../styles/media";

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
  transition: all 0.15s ease-in-out;
  font-size: 1rem;
  line-height: 1.15;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0.5rem 0 0 0;
`;
