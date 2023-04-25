import { css } from '@emotion/react';

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Noto Sans',
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue',
      sans-serif;
    font-weight: 400;
    color: #000;

    word-break: keep-all;
    word-wrap: break-word;
    box-sizing: border-box;
  }

  /* CSS RESET */
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  a {
    padding: 0;
    text-decoration: none;
    box-shadow: none;
    outline: none;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    border: 0;
  }

  button {
    background-color: transparent;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    font: inherit;
  }

  input {
    text-decoration: none;
    background-color: none;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-transition: background-color 9999s ease-out;
    transition: background-color 5000s ease-in-out 0s;
  }

  textarea {
    resize: none;
    border: none;
    outline: none;
  }

  select {
    background: none;
    outline: none;
    border-radius: 0;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  /* POST CARD WORD BREAK */
  .typography-ellipsis-2line {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.6em;
    height: 3.2em;
  }
`;
