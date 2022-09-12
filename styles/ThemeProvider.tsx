import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import themeObj from "./theme";
import GlobalStyles from "./GlobalStyles";

type ThemeProps = {
  children: React.ReactNode;
};

const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={themeObj}>
      <Normalize />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
