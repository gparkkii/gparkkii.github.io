import React from 'react';
import styled from '@emotion/styled';
import { mediaQuery } from 'theme/index';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { MarkdownRenderer } from './styles/code.styles';

interface ContentBodyProps {
  html: string;
  thumbnail: IGatsbyImageData;
}

const ImageWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;

  ${mediaQuery.sm} {
    margin-bottom: 40px;
  }
`;

const ContentBody = ({ thumbnail, html }: ContentBodyProps) => {
  return (
    <>
      <ImageWrapper>
        <GatsbyImage
          style={{
            height: '328px',
            objectFit: 'contain',
            borderRadius: '20px',
          }}
          loading="lazy"
          image={thumbnail}
          alt="thumbnail"
        />
      </ImageWrapper>
      <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default ContentBody;
