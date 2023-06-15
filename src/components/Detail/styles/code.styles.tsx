import styled from '@emotion/styled';
import { mediaQuery } from 'theme/index';
import CodeBlock from '../../../assets/code-block.png';

export const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 100%;
  word-break: keep-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.bluegray[600]};

  .responsive-image {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 16px;
  }

  * + h1 {
    margin-top: 60px;
  }
  * + h2 {
    margin-top: 48px;
  }
  * + h3 {
    margin-top: 40px;
  }

  h1 + h2,
  h2 + h3 {
    margin-top: 12px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  // Adjust Heading Element Style
  h1 {
    ${({ theme }) => theme.fonts.type.heading1};
    color: ${({ theme }) => theme.colors.bluegray[800]};
    ${mediaQuery.sm} {
      ${({ theme }) => theme.fonts.type.heading1mobile};
    }
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.bluegray[800]};
    ${mediaQuery.sm} {
      font-size: 22px;
    }
  }
  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.bluegray[800]};
    font-weight: 600;
    ${mediaQuery.sm} {
      ${({ theme }) => theme.fonts.type.title};
      font-weight: 600;
    }
  }

  // Apply Padding Attribute to All Elements
  p {
    margin: 8px 0;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.bluegray[600]};
  }
  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.bluegray[800]};
  }

  // Adjust List Element Style
  ol,
  ul {
    margin: 10px 0px;
    margin-left: 20px;
    padding-left: 16px;
    line-height: 2;
  }
  ol > li {
    color: ${({ theme }) => theme.colors.bluegray[700]};
    list-style: decimal;
    padding-left: 2px;
  }
  ul > li {
    color: ${({ theme }) => theme.colors.bluegray[700]};
    list-style: disc;
    ul > li {
      list-style: circle;
      ul > li {
        list-style: square;
        ul > li {
          list-style: outside;
        }
      }
    }
  }

  li {
    padding: 2px 0px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 16px 0;
    padding: 20px;
    border-left: 4px solid ${({ theme }) => theme.colors.bluegray[300]};
    background-color: ${({ theme }) => theme.colors.bluegray[50]};
    & p {
      margin: 0;
      color: ${({ theme }) => theme.colors.bluegray[500]};
    }
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px dashed ${({ theme }) => theme.colors.bluegray[150]};
    margin: 60px 0;
  }

  // Adjust Link Element Style
  a {
    color: ${({ theme }) => theme.colors.secondary[600]};
    font-weight: 500;
    text-decoration: underline;

    strong {
      color: ${({ theme }) => theme.colors.secondary[600]};
    }

    :hover {
      text-decoration: underline;
      text-decoration-style: double;
      color: ${({ theme }) => theme.colors.secondary[800]};
    }
  }

  // Adjust Summary Element Style
  summary {
    margin: 16px 0px;
    ::marker {
      color: ${({ theme }) => theme.colors.primary[100]};
    }
    & strong {
      padding: 2px;
      :hover {
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: ${({ theme }) => theme.colors.primary[100]};
      }
    }
  }

  // Adjust Table Element Style
  table {
    margin: 20px 0px;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid ${({ theme }) => theme.colors.bluegray[300]};
  }

  thead {
    background-color: ${({ theme }) => theme.colors.bluegray[150]};
    th {
      border-right: 1px solid ${({ theme }) => theme.colors.bluegray[300]};
      border-bottom: 1px solid ${({ theme }) => theme.colors.bluegray[300]};
      padding: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.bluegray[800]};
    }
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.bluegray[300]};
    border-right: 1px solid ${({ theme }) => theme.colors.bluegray[300]};
    padding: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.bluegray[800]};
  }
  tr:last-child {
    td {
      border-bottom: 0px;
    }
  }

  td:last-child,
  th:last-child {
    border-right: 0px;
  }

  figcaption {
    text-align: right;
    font-size: 13px;
    color: #757575;
    margin-top: -2px;
    margin-bottom: 20px;
  }

  // Adjust Code Style
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono',
      monospace;
    font-weight: 500;
    font-size: 15px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.75;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    -ms-overflow-style: none; // IE 10+
    overflow: -moz-scrollbars-none; // Firefox
  }

  /* Inline Code */
  code[class*='language-text'] {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    color: ${({ theme }) => theme.colors.primary.default};
    border: 1.5px dashed ${({ theme }) => theme.colors.primary.default};
    padding: 2px 4px;
    margin: 0px 4px;
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono',
      monospace;
    font-weight: 500;
    font-size: 15px;
  }

  pre[class*='language-']::-webkit-scrollbar {
    background-color: none; // Safari and Chrome
  }

  /* Code blocks */
  .gatsby-code-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2em;
    background-color: #1e1e1e;
    border-top-left-radius: 0.6em;
    border-top-right-radius: 0.6em;
  }
  .gatsby-code-button {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 4px;
    padding-top: 0.2em;
    padding-right: 1.5em;
    font-size: 13px;
    font-weight: 400;
    color: #909090;
    & svg {
      stroke: #909090;
    }
    :hover {
      color: #ccc;
      & svg {
        stroke: #ccc;
      }
    }
  }

  .gatsby-code-button-container::after {
    content: '';
    position: absolute;
    width: 6em;
    height: 1.75em;
    top: 0.2em;
    left: 0.4em;
    background: url(${CodeBlock});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left top;
    border-top-left-radius: 0.6em;
  }
  .gatsby-highlight {
    position: relative;
    display: block;
    border-top: 2em solid #1e1e1e;
    border-top-left-radius: 0.6em;
    border-top-right-radius: 0.6em;
  }
  .gatsby-highlight-code-line {
    display: block;
    background-color: #353b46;
    border-left: 3px solid #aaa;
    font-family: 'Fira Code';
    color: inherit;
  }

  .gatsby-remark-code-title {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    margin-left: 10%;
    margin-top: 2.5em;
    margin-bottom: -4.5em;

    font-family: 'Fira Code';
    font-size: 13px;
    color: #aaa;
    z-index: 999;
  }

  pre[class*='language-'] {
    margin: 0;
    padding: 1.4em 1.6em;
    overflow: auto;
    border-bottom-left-radius: 0.6em;
    border-bottom-right-radius: 0.6em;
  }

  pre > code[class*='language-'],
  pre[class*='language-'] {
    font-family: 'Fira Code';
    font-weight: 500;
    background-color: #282c34;
    border: 0px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.light[300]};

    .token {
      font-family: 'Fira Code';
    }
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #616161;
  }

  .token.punctuation {
    color: #e0e0e0;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e06c75;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #ff9100;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #ffff00;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #b388ff;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #00e676;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;
