import styled from '@emotion/styled';
import React from 'react';

const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

const TooltipBox = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: -40px;
  padding: 4px 12px;
  border-radius: 8px;
  background-color: rgba(113, 119, 132, 0.25);
  color: ${({ theme }) => theme.colors.bluegray[500]};
  ${({ theme }) => theme.fonts.type.caption2};
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
