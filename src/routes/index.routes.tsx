import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PublicRoutes } from './public.routes';

export type FeedbackParams = {
  title: string;
  description?: string;
  type: 'success' | 'error';
  nextScreen: string;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      SignIn: undefined;
      ForgotPasswordFirstStep: undefined;
      ForgotPasswordSecondStep: undefined;
      ForgotPasswordThirdStep: undefined;
      Feedback: FeedbackParams;
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
