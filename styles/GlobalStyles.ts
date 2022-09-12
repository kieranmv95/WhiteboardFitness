import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: ${({ theme }) => theme.font.weight.regular};
        line-height: 1.5;
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.copy};
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: ${({ theme }) => theme.font.weight.medium};
    }
`;

export default GlobalStyles;
