import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

 /* ці стилі потрібні для того, щоб в інпуті не відображалися стрілки збільшення/зменшення значення */
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* Chrome, Safari, Edge, Opera */
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox on Windows */
  input[type="number"] {
    -moz-appearance: textfield !important;
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    font-size: 16px;
    color: ${p => p.theme.colors.dark};
    background-color: ${p => p.theme.colors.white};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #D7E3FF;
    width: 3px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #9EBBFF;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #407BFF;
  }
`;

