import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  background?: string;
  light?: boolean;
};

export function Button({ title, background, light = false, ...rest }: Props) {
  return (
    <Container {...rest} background={background}>
      <Title light={light}>{title}</Title>
    </Container>
  );
}
