import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import theme from './styles/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

import AppLoading from 'expo-app-loading';

import { Home } from './screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    IndieFlower_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
