import React from 'react';
import { Global, css } from '@emotion/core';
import 'modern-css-reset/dist/reset.min.css';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          font-size: 14px;

          @media screen and (min-width: 900px) {
            font-size: 15px;
          }

          @media screen and (min-width: 1200px) {
            font-size: 16px;
          }
        }

        body {
          background-color: #fff;
          font-family: 'Open Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #444;
        }
      `}
    />
  );
}

export default GlobalStyles;
