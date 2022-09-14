import styled from "styled-components";
import { device } from "../media";

export const ImageHolder = styled.div`
  width: 100%;
  position: relative;
  height: 17.5rem;
  @media ${device.tablet} {
    height: 20rem;
  }
  @media ${device.laptop} {
    height: 35rem;
  }
`;
