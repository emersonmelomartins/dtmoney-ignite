import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px -> tamanho padrão para desktop
  // 93.75% -> Diminui 1 pixel do tamanho padrão (16 - 0.9375) = 15
  // 87.5% -> Diminui 1 pixel do tamanho acima (15 - 0.875) = 14

  // Utilizar porcentagem ao invés de px, pois se for mobile ou tablet, o font-size pode ser
  // diferente de 16px
  // REM -> 1rem = font-size da pagina (16px)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }


  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
