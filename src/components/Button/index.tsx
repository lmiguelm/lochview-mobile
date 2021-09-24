import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  background?: string;
  light?: boolean;
  loading?: boolean;
};

export function Button({
  title,
  background,
  light = false,
  loading = false,
  enabled = true,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <Container
      {...rest}
      background={background}
      enabled={!loading && enabled}
      disabled={loading || !enabled}
    >
      {loading ? (
        <ActivityIndicator color={colors.light} size="small" />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
