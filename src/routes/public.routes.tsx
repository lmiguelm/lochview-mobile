import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Tour } from '../screens/Tour';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SingIn';
import { Feedback } from '../screens/Feedback';

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
      initialRouteName="Tour"
    >
      <Screen name="Tour" component={Tour} />
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Feedback" component={Feedback} />

      <Group>
        <Screen name="ForgotPasswordFirstStep" component={ForgotPasswordFirstStep} />
        <Screen name="ForgotPasswordSecondStep" component={ForgotPasswordSecondStep} />
        <Screen name="ForgotPasswordThirdStep" component={ForgotPasswordThirdStep} />
      </Group>
    </Navigator>
  );
}
