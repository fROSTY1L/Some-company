import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0 !important;
  }
`;
