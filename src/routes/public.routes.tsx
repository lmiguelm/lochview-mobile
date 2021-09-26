import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SingIn';

import { ForgotPasswordFirstStep } from '../screens/ForgotPassword/ForgotPasswordFirstStep';
import { ForgotPasswordSecondStep } from '../screens/ForgotPassword/ForgotPasswordSecondStep';
import { ForgotPasswordThirdStep } from '../screens/ForgotPassword/ForgotPasswordThirdStep';

export function PublicRoutes() {
  const { Navigator, Screen, Group } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />

      <Group>
        <Screen name="ForgotPasswordFirstStep" component={ForgotPasswordFirstStep} />
        <Screen name="ForgotPasswordSecondStep" component={ForgotPasswordSecondStep} />
        <Screen name="ForgotPasswordThirdStep" component={ForgotPasswordThirdStep} />
      </Group>
    </Navigator>
  );
}
