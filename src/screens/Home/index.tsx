import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Easing } from 'react-native-reanimated';

import backgroundImage from '../../assets/home-background.png';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import { Container, Footer, Title } from './styles';

const titleAnimation = {
  from: {
    opacity: 0,
    transform: [
      {
        translateY: -300,
      },
    ],
  },
  animate: {
    opacity: 1,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
  transition: {
    type: 'timing',
    duration: 2000,
    easing: Easing.bounce,
  },
};

const footerAnimation = {
  from: {
    opacity: 0,
    transform: [
      {
        translateY: 150,
      },
    ],
  },
  animate: {
    opacity: 1,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
  transition: {
    type: 'timing',
    duration: 1000,
  },
};

export function Home() {
  const { colors } = useTheme();

  const { navigate } = useNavigation();

  function handleNavigateToSignIn() {
    navigate('SignIn');
  }
  function handleNavigateToRegister() {}

  return (
    <Container source={backgroundImage}>
      <StatusBar style="dark" backgroundColor="transparent" />

      <Title
        from={titleAnimation.from}
        animate={titleAnimation.animate}
        transition={titleAnimation.transition as any}
      >
        LochView
      </Title>

      <Footer
        from={footerAnimation.from}
        animate={footerAnimation.animate}
        transition={footerAnimation.transition as any}
      >
        <Button title="Entrar" onPress={handleNavigateToSignIn} />

        <Button
          title="Começar"
          background={colors.light}
          light
          onPress={handleNavigateToRegister}
        />
      </Footer>
    </Container>
  );
}
