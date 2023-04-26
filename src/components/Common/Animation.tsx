import React, { useEffect, createRef } from 'react';
import lottie from 'lottie-web';

interface Props {
  animation: unknown;
  height?: number;
  width?: number;
  loop?: boolean;
  autoplay?: boolean;
}

export const Animations: React.FC<Props> = ({
  animation,
  height = 480,
  width = 480,
  loop = true,
  autoplay = true,
}) => {
  const animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData: animation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div
      style={{ height, width, objectFit: 'contain' }}
      ref={animationContainer}
    />
  );
};
