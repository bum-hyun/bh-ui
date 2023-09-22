import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global styles={style} />
)
const style = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  html {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    color: #555;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }

  input,
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  textarea,
  blockquote,
  th,
  td,
  p,
  button,
  span {
    -webkit-tap-highlight-color: transparent;
  }

  fieldset,
  img,
  abbr,
  acronym {
    border: 0 none;
  }

  img {
    display: block;
    vertical-align: top;
  }

  legend {
    margin-left: -7px;
  }

  legend.hidden {
    position: absolute;
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  address,
  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-style: normal;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  caption {
    height: 0;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
    text-indent: -10000px;
  }

  input:focus,
  a:focus,
  button:focus {
    outline: 0 none;
  }

  textarea:focus {
    outline: none;
  }

  a {
    font-weight: 400;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;
    transition: all 0.1s linear;
  }

  a:focus,
  a:hover {
    text-decoration: none;
  }

  button {
    position: relative;
    padding: 0;
    border: 0 none;
    background: none;
    overflow: hidden;
    transition: all 0.1s linear;
    cursor: pointer;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  label,
  button,
  input,
  select,
  textarea {
    line-height: 1.2;
    font-size: inherit;
    vertical-align: middle;
  }

  hr {
    margin: 0;
  }

  select {
    border-radius: 0;
  }

  textarea {
    overflow: auto;
    resize: none;
  }

  textarea[readonly="readonly"]:focus {
    border-color: #bfbfbf;
  }

  input[type="checkbox"],
  input[type="radio"] {
    border-radius: 0;
    cursor: pointer;
  }

  input[type="search"] {
    appearance: textfield;
  }

  input[type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  label {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  label:active {
    appearance: none;
  }

  label:focus {
    outline: none;
  }

  /* html5 태그 */

  header,
  footer,
  article,
  section,
  aside,
  details,
  figure,
  figcaption,
  nav,
  hgroup {
    display: block;
    margin: 0;
    padding: 0;
  }

  audio[controls],
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: 0;
  }

  * {
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0%);
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 700ms linear;
    background-color: rgba(0, 0, 0, 10%);
  }

  #modal-area {
    z-index: 1001;
  }

  #backdrop-area {
    z-index: 1000;
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 10%);
    }

    50% {
      background-color: rgba(165, 165, 165, 30%);
    }

    100% {
      background-color: rgba(165, 165, 165, 10%);
    }
  }

  .skeleton {
    background-color: #a5a5a5;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
  }

  @keyframes slideIn {
    from {
      transform: translateY(-300%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-300%);
    }
  }

  .openAnimation {
    animation: slideIn 0.5s ease-in-out 0s 1 normal forwards;
  }

  .closeAnimation {
    animation: slideOut 0.5s ease-in-out 0s 1 normal forwards;
  }
`;

export default GlobalStyle;
