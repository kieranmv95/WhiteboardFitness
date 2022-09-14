import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      bgLight: string;
      copy: string;
      main: string;
      secondary: string;
      secondaryLight: string;
      disabled: string;
    };
    font: {
      weight: {
        thin: number;
        regular: number;
        medium: number;
        bold: number;
        black: number;
      };
    };
    borderRadius: {
      rounded: string;
      xs: string;
    };
  }
}
