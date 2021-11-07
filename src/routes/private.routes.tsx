import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PrivateDrawer } from './drawer.private.routes';
import { BedroomDetails } from '../screens/BedroomDetails';
import { Scheduling } from '../screens/Scheduling';
import { Confirmation } from '../screens/Confirmation';

export function PrivateRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="PrivateDrawer"
    >
      <Screen name="PrivateDrawer" component={PrivateDrawer} />
      <Screen name="BedroomDetails" component={BedroomDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
