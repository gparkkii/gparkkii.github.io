import styled from '@emotion/styled';
import React from 'react';

const DrawerWrapper = styled.div<{ visible: boolean }>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 100 : 0)};
  z-index: ${props => (props.visible ? 99998 : -1)};

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light[50]};
`;

interface DrawerProps {
  visible: boolean;
}

const Drawer = ({ visible }: DrawerProps) => {
  return <DrawerWrapper visible={visible}>Drawer</DrawerWrapper>;
};

export default Drawer;
