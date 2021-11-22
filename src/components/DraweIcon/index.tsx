import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Icon } from './styles';

type Props = {
  color: string;
  focused: boolean;
  size: number;
  icon: React.ComponentProps<typeof Feather>['name'];
};

export function DrawerIcon({ color, size, focused, icon }: Props) {
  return (
    <Container active={focused}>
      <Icon active={focused} name={icon} size={size} color={color} />
    </Container>
  );
}
