import React from 'react';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

import { Button } from '../../components/Form/Button';

import { Container, Content, Description, Title } from './styles';

import check from '../../assets/check.json';
import error from '../../assets/error.json';

import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/core';

import { FeedbackParams } from '../../routes/index.routes';

export function Feedback() {
  const { colors } = useTheme();

  const { navigate } = useNavigation();

  const { params } = useRoute();
  const { title, type, description, nextScreen } = params as FeedbackParams;

  function handleNextScreen() {
    navigate(nextScreen as any);
  }

  return (
    <Container>
      <StatusBar style="light" />

      <LottieView
        source={type === 'success' ? check : error}
        autoPlay
        loop={false}
        style={{
          height: 500,
          width: 500,
        }}
        speed={type === 'error' ? 0.3 : 1}
      />

      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>

      <Button
        title="Ok"
        light={type === 'success'}
        background={type === 'success' ? colors.success : colors.danger}
        onPress={handleNextScreen}
      />
    </Container>
  );
}
