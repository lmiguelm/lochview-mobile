import React from 'react';
import { MotiView } from 'moti';
import { Skeleton } from '@motify/skeleton';

import { BedroomAnimation } from '../BedroomAnimation';

const Spacer = ({ height = 30 }) => <MotiView style={{ height }} />;

export function BedroomSkeleton() {
  return (
    <BedroomAnimation>
      <Skeleton show colorMode="light" radius={8} height={300}>
        <MotiView />
      </Skeleton>

      <Spacer />
    </BedroomAnimation>
  );
}
