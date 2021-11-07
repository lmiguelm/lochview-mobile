import React from 'react';
import { Feather } from '@expo/vector-icons';

import { BedroomAnimation } from './BedroomAnimation';

import example from '../../assets/bedroom-example.png';

import { useNavigation } from '@react-navigation/core';
import { BedroomSkeleton } from './Skeleton';

import {
  Background,
  Container,
  Content,
  Title,
  Price,
  PriceContainer,
  Description,
  PriceText,
  Header,
} from './styles';
import { useTheme } from 'styled-components';

type Props = {
  isLoading?: boolean;
  enabled?: boolean;
};

export function Bedroom({ isLoading = false, enabled = true }: Props) {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleToBedroomDetails() {
    navigate('BedroomDetails');
  }

  if (isLoading) {
    return <BedroomSkeleton />;
  }

  return (
    <BedroomAnimation>
      <Container
        onPress={handleToBedroomDetails}
        style={{
          elevation: 10,
        }}
        enabled={enabled}
      >
        <Background resizeMode="cover" source={example} />

        <Content>
          <Header>
            <Title>Suite X</Title>
            {enabled && <Feather name="chevron-right" size={18} color={colors.text_details} />}
          </Header>

          <Description>teste teste teste teste teste teste</Description>

          <PriceContainer>
            <PriceText>R$</PriceText>
            <Price>80,00</Price>
          </PriceContainer>
        </Content>
      </Container>
    </BedroomAnimation>
  );
}
