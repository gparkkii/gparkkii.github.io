import React from 'react';
import NoContentLottie from 'images/lotties/no-content.json';
import { Animations } from './Animation';
import styled from '@emotion/styled';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { breakpoints, mediaQuery } from '../../theme/breakpoints';
import { theme } from '../../theme';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 80px;

  width: 100%;
  height: 100%;
`;

const NoContentTypo = styled.p`
  ${props => props.theme.fonts.type.heading2};
  color: ${props => props.theme.colors.bluegray[600]};
  margin-top: -20px;
  margin-bottom: 12px;
  ${mediaQuery.sm} {
    ${props => props.theme.fonts.type.heading2mobile};
  }
`;

const NoContent = () => {
  const mobileSize = useMediaQuery(breakpoints.md);
  return (
    <FlexContainer>
      <Animations
        width={mobileSize ? 300 : 520}
        height={mobileSize ? 240 : 400}
        animation={NoContentLottie}
      />
      <NoContentTypo>피드가 텅! 비었어요</NoContentTypo>
      <p style={{ color: theme.colors.primary[200] }}>
        곧 새로운 소식이 올라올지도 몰라요
      </p>
    </FlexContainer>
  );
};

export default NoContent;
