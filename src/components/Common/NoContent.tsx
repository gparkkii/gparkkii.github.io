import React from 'react';
import NoContentLottie from 'images/lotties/no-content.json';
import { Animations } from './Animation';
import styled from '@emotion/styled';
import { useResponsive } from 'hooks/useResponsive';
import { theme, breakpoints } from 'theme/index';
import { Heading2, Subtitle } from 'styles/typography';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 40px;

  width: 100%;
  height: 100%;
`;

const Margin = styled.div`
  margin-top: -20px;
  margin-bottom: 12px;
`;

const NoContent = () => {
  const mobileSize = useResponsive(breakpoints.md);
  return (
    <FlexContainer>
      <Animations
        width={mobileSize ? 300 : 520}
        height={mobileSize ? 240 : 400}
        animation={NoContentLottie}
      />
      <Margin>
        <Heading2 textColor={theme.colors.bluegray[600]}>
          피드가 텅! 비었어요
        </Heading2>
      </Margin>
      <Subtitle textColor={theme.colors.primary[200]}>
        곧 새로운 소식이 올라올지도 몰라요
      </Subtitle>
    </FlexContainer>
  );
};

export default NoContent;
