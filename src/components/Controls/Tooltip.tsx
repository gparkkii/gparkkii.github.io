import styled from '@emotion/styled';
import React from 'react';

const TooltipWrapper = styled.div`
  position: relative;
  :hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

const TooltipBox = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: -48px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgba(113, 119, 132, 0.25);
  ${({ theme }) => theme.fonts.type.body1};
`;

interface TooltipProps {
  children: React.ReactNode;
  tip: string;
}

const Tooltip = ({ children, tip }: TooltipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipBox className="tooltip">{tip}</TooltipBox>
    </TooltipWrapper>
  );
};

export default Tooltip;
