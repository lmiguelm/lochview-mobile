import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

type Props = {
  color?: string;
};

export function BackButton({ color }: Props) {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container onPress={goBack}>
      <Feather name="chevron-left" size={24} color={color ? color : colors.primary} />
    </Container>
  );
}
