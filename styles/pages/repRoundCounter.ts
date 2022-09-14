import styled from "styled-components";
import { device } from "../media";

export const RepCounterGrid = styled.div<{ fullScreen: boolean }>`
  position: ${({ fullScreen }) => (fullScreen ? "fixed" : "relative")};
  display: grid;
  margin-top: ${({ fullScreen }) => (fullScreen ? "0" : "1rem")};
  height: ${({ fullScreen }) =>
    fullScreen ? "calc(100vh - 3.5rem - 3.755rem)" : "calc(100vh - 14.1rem)"};
  top: ${({ fullScreen }) => (fullScreen ? "3.5rem" : "0")};
  left: 0;
  width: 100%;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
  div {
    display: grid;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    cursor: pointer;
    div {
      pointer-events: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }

  > div:nth-child(1) {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.bg};
  }
  > div:nth-child(2) {
    background-color: ${({ theme }) => theme.colors.main};
  }
  div h3 {
    margin: 0;
    font-weight: ${({ theme }) => theme.font.weight.black};
  }
  div p {
    font-size: 6rem;
    line-height: 1;
    margin: 1.25rem 0 0 0;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    @media ${device.laptop} {
      font-size: 8rem;
    }
  }
`;

export const ScreenSize = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.bgLight};
  padding: 0.25rem 0.5rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
