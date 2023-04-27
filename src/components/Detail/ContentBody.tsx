import React from 'react';
import styled from '@emotion/styled';
import { mediaQuery } from '../../theme';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ContentBodyProps {
  html: string;
  thumbnail: IGatsbyImageData;
}

const ImageWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;

  ${mediaQuery.sm} {
    margin-bottom: 20px;
  }
`;

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 100%;
  word-break: keep-all;

  // Markdown Style
  line-height: 1.75;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.bluegray[600]};

  h1,
  h2,
  h3 {
    margin-bottom: 16px;
  }

  * + h1 {
    margin-top: 60px;
  }
  * + h2,
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
    margin-top: 10px;
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

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 20px 0;
    padding: 16px 20px;
    font-size: 15px;
    border-radius: 8px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  code[class*='language-text'] {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    color: ${({ theme }) => theme.colors.primary.default};
    border: 1.5px dashed ${({ theme }) => theme.colors.primary.default};
    padding: 2px 4px;
    margin: 0px 4px;
    font-size: 14px;
  }

  pre > code[class*='language-text'] {
    background-color: #2d2d2d;
    border: 0px;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.light[300]};
  }
`;

const ContentBody = ({ thumbnail, html }: ContentBodyProps) => {
  return (
    <>
      <ImageWrapper>
        <GatsbyImage
          loading="lazy"
          style={{
            height: '348px',
            objectFit: 'contain',
            borderRadius: '20px',
          }}
          image={thumbnail}
          alt="thumbnail"
        />
      </ImageWrapper>
      <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default ContentBody;
