import styled from '@emotion/styled';
import React from 'react';
import { useResponsive } from 'hooks/useResponsive';
import { Animations } from 'components/Common/Animation';
import { breakpoints, mediaQuery, theme } from 'theme/index';
import NotFoundLottie from 'images/lotties/not-found.json';
import BaseLayout from 'layout/BaseLayout';
import { PATH } from 'routes/path';
import { Heading1, Title } from 'styles/typography';
import { Link } from 'gatsby';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 48px;
`;

const Margin = styled.div`
  margin-top: -120px;
  margin-bottom: 12px;
  ${mediaQuery.sm} {
    margin-top: -40px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  .home {
    font-weight: 600;
  }
  .home:hover {
    text-decoration: underline;
    text-decoration-style: wavy;
  }
  & h3 {
    font-weight: 500;
  }
`;

const NotFound = () => {
  const mobileSize = useResponsive(breakpoints.sm);
  return (
    <BaseLayout path={PATH[404]}>
      <NotFoundWrapper>
        <Animations
          width={mobileSize ? 348 : 768}
          height={mobileSize ? 248 : 468}
          animation={NotFoundLottie}
        />
        <Margin>
          <Heading1 textColor={theme.colors.bluegray[600]}>
            해당 페이지를 찾을 수 없습니다.
          </Heading1>
        </Margin>
        <FlexBox>
          <Link to={PATH.index}>
            <Title className="home" textColor={theme.colors.primary[200]}>
              홈으로
            </Title>
          </Link>
          <Title textColor={theme.colors.bluegray[450]}>
            &nbsp;이동하여 다시 시도해주세요.
          </Title>
        </FlexBox>
      </NotFoundWrapper>
    </BaseLayout>
  );
};

export default NotFound;
