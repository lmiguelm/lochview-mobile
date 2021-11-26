import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';

import { RegisterFirstStep } from '../screens/Register/RegisterFirstStep';
import { RegisterSecondStep } from '../screens/Register/RegisterSecondStep';
import { RegisterThirdStep } from '../screens/Register/RegisterThirdStep';

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
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />

      <Group>
        <Screen name="RegisterFirstStep" component={RegisterFirstStep} />
        <Screen name="RegisterSecondStep" component={RegisterSecondStep} />
        <Screen name="RegisterThirdStep" component={RegisterThirdStep} />
      </Group>

      <Screen name="Feedback" component={Feedback} />

      <Group>
        <Screen name="ForgotPasswordFirstStep" component={ForgotPasswordFirstStep} />
        <Screen name="ForgotPasswordSecondStep" component={ForgotPasswordSecondStep} />
        <Screen name="ForgotPasswordThirdStep" component={ForgotPasswordThirdStep} />
      </Group>
    </Navigator>
  );
}
