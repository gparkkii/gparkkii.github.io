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
  bottom: -36px;

  padding: 4px 10px;
  border-radius: 6px;
  background-color: rgba(113, 119, 132, 0.2);
  color: ${({ theme }) => theme.colors.bluegray[500]};
  ${({ theme }) => theme.fonts.type.caption2};
  text-align: center;
`;

interface TooltipProps {
  children: React.ReactNode;
  tip: string;
  width?: number;
}

const Tooltip = ({ width, children, tip }: TooltipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipBox style={{ width }} className="tooltip">
        {tip}
      </TooltipBox>
    </TooltipWrapper>
  );
};

export default Tooltip;
