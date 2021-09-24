import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';
import { useTheme } from 'styled-components';

export function BackButton() {
  const { colors } = useTheme();

  return (
    <Container>
      <Feather name="chevron-left" size={24} color={colors.primary} />
    </Container>
  );
}
