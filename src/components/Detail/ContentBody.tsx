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
  margin-bottom: 60px;
`;

const MarkdownRenderer = styled.div`
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

  // Adjust Heading Element Style
  h1 {
    margin-top: 40px;
    margin-bottom: 20px;

    ${({ theme }) => theme.fonts.type.heading1};
    color: ${({ theme }) => theme.colors.bluegray[800]};

    ${mediaQuery.sm} {
      ${({ theme }) => theme.fonts.type.heading1mobile};
    }
  }
  h2 {
    margin-top: 20px;
    margin-bottom: 16px;

    font-size: 25px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.bluegray[800]};

    ${mediaQuery.sm} {
      font-size: 22px;
    }
  }
  h3 {
    margin-top: 16px;
    margin-bottom: 12px;
    ${({ theme }) => theme.fonts.type.title};
    color: ${({ theme }) => theme.colors.bluegray[800]};
    font-weight: 600;
  }

  // Apply Padding Attribute to All Elements
  p {
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
    margin-left: 20px;
    padding-left: 16px;
    line-height: 2;
    margin-bottom: 20px;
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
    padding: 4px 20px;
    border-left: 4px solid ${({ theme }) => theme.colors.bluegray[300]};
    & p {
      color: ${({ theme }) => theme.colors.bluegray[450]};
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
      padding: 8px;
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
      <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
    </>
  );
};

export default ContentBody;
