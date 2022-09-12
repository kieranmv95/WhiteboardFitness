import { redirect } from "next/dist/server/api-utils";
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    bg: "#ecf0f1",
    bgLight: "#fff",
    copy: "#131313",
    main: "#e74c3c",
    secondary: "#273848",
    secondaryLight: "#4f769b",
  },
  font: {
    weight: {
      thin: 100,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
  },
  borderRadius: {
    rounded: "999rem",
    xs: "0.3rem",
  },
};

export default theme;
