import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';

import { useAuth } from '../hooks/useAuth';

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
      Dashboard: undefined;
      BedroomDetails: undefined;
      Scheduling: undefined;
      Confirmation: undefined;
      PrivateDrawer: undefined;
    }
  }
}

export function Routes() {
  const { isLogged } = useAuth();

  return (
    <NavigationContainer>{isLogged ? <PrivateRoutes /> : <PublicRoutes />}</NavigationContainer>
  );
}
