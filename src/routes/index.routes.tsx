import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PublicRoutes } from './public.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      SignIn: undefined;
      ForgotPasswordFirstStep: undefined;
      ForgotPasswordSecondStep: undefined;
      ForgotPasswordThirdStep: undefined;
    }
  }
}

export function Routes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
