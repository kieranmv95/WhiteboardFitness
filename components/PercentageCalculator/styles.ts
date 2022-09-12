import exp from "constants";
import styled from "styled-components";
import { device } from "../../styles/media";

export const InputHolder = styled.div`
  label {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
  input {
    margin-left: 0.5rem;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const Breakdown = styled.h2`
  margin-bottom: 0rem;
`;

export const RoundingCopy = styled.div`
  margin-bottom: 1rem;
`;

export const Buttons = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    display: inline-grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1rem;
    margin-bottom: 2rem;
  }
`;

export const NumbersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media ${device.laptop} {
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NumbersGridItem = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  padding: 1.5rem 1rem;
`;

export const NumbersGridPercentage = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  font-size: 0.9rem;
`;

export const NumbersGridValue = styled.div`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
`;
