import React from 'react';
import { MotiView } from 'moti';
import { useWindowDimensions } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export function BedroomAnimation({ children }: Props) {
  const { width: displayWidth } = useWindowDimensions();

  return (
    <MotiView
      from={{
        opacity: 0,
        transform: [
          {
            translateX: 0.25 * displayWidth,
          },
        ],
      }}
      animate={{
        opacity: 1,
        transform: [
          {
            translateX: 0,
          },
        ],
      }}
      exit={{
        opacity: 0,
        transform: [
          {
            translateX: -(0.25 * displayWidth),
          },
        ],
      }}
      transition={{
        type: 'timing',
        duration: 1000,
      }}
    >
      {children}
    </MotiView>
  );
}
