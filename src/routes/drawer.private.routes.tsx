import React from 'react';
import { createDrawerNavigator, DrawerHeaderProps } from '@react-navigation/drawer';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { HeaderDrawer } from '../components/HeaderDrawer';
import { DrawerIcon } from '../components/DraweIcon';

import { Dashboard } from '../screens/Dashboard';
import { Profile } from '../screens/Profile';

import { useTheme } from 'styled-components';

export function PrivateDrawer() {
  const { Navigator, Screen } = createDrawerNavigator();

  const { colors, fonts } = useTheme();

  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        header: (props: DrawerHeaderProps) => <HeaderDrawer drawer={props} />,
        drawerHideStatusBarOnOpen: true,
        drawerType: 'slide',
        drawerActiveTintColor: colors.primary,
        drawerActiveBackgroundColor: colors.light,
        overlayColor: colors.overlay,
        drawerInactiveTintColor: colors.text_details,
        drawerLabelStyle: {
          fontFamily: fonts.medium,
          fontSize: RFValue(16),
        },
        drawerStyle: {
          paddingTop: getStatusBarHeight(),
          margin: 0,
          backgroundColor: colors.background,
        },
        drawerContentStyle: {
          padding: 0,
          margin: 0,
        },
        drawerStatusBarAnimation: 'slide',
      }}
    >
      <Screen
        name="Explorar"
        component={Dashboard}
        options={{
          drawerIcon: ({ size, color, focused }) => (
            <DrawerIcon icon="search" size={size} color={color} focused={focused} />
          ),
        }}
      />

      <Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({ size, color, focused }) => (
            <DrawerIcon icon="user" size={size} color={color} focused={focused} />
          ),
        }}
      />

      <Screen
        name="Minhas reservas"
        component={Dashboard}
        options={{
          drawerIcon: ({ size, color, focused }) => (
            <DrawerIcon icon="bookmark" size={size} color={color} focused={focused} />
          ),
        }}
      />
    </Navigator>
  );
}
