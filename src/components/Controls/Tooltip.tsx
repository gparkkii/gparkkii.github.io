import styled from '@emotion/styled';
import React from 'react';

const TooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

const TooltipBorder = styled.div`
  position: relative;
  height: 1px;
  margin-top: -1px;
`;

const TooltipBox = styled.div`
  visibility: hidden;
  position: absolute;
  top: 10px;
  right: -24px;
  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 4px 10px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.light.default};
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
      <TooltipBorder>
        <TooltipBox style={{ width }} className="tooltip">
          {tip}
        </TooltipBox>
      </TooltipBorder>
    </TooltipWrapper>
  );
};

export default Tooltip;
