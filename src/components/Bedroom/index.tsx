import React from 'react';

import { Background, Container, Title } from './styles';

import { BedroomAnimation } from './BedroomAnimation';

import example from '../../assets/bedroom-example.png';

import { useNavigation } from '@react-navigation/core';
import { BedroomSkeleton } from './Skeleton';

type Props = {
  isLoading?: boolean;
};

export function Bedroom({ isLoading = false }: Props) {
  const { navigate } = useNavigation();

  function handleToBedroomDetails() {
    navigate('BedroomDetails');
  }

  if (isLoading) {
    return <BedroomSkeleton />;
  }

  return (
    <BedroomAnimation>
      <Container onPress={handleToBedroomDetails}>
        <Background resizeMode="cover" source={example} />
        <Title>Suite X</Title>
      </Container>
    </BedroomAnimation>
  );
}
