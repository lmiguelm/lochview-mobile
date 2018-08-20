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

function AppComponent() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, // //
    Poppins_500Medium,
    Poppins_700Bold,
    IndieFlower_400Regular,
  });

  useEffect(() => {
    if (!__DEV__) {
      codePush.sync({
        installMode: codePush.InstallMode.IMMEDIATE,
      });
    }
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

let App;

if (__DEV__) {
  App = AppComponent;
} else {
  App = codePush({
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  })(App);
}

export default App;
