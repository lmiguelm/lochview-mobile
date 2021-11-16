import React, { useEffect } from 'react';
import codePush from 'react-native-code-push';

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

import { Routes } from './routes/index.routes';
import { AuthProvider } from './contexts/Auth';

function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    IndieFlower_400Regular,
  });

  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
