import React, { Fragment, useState } from 'react';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Header, Wrapper, Title } from './styles';

import { ModalSignOut } from '../ModalSignOut';

import { useTheme } from 'styled-components';

type Props = {
  drawer: DrawerHeaderProps;
};

export function HeaderDrawer({ drawer }: Props) {
  const { colors } = useTheme();

  const { navigation, route } = drawer;
  const { name } = route;

  const [showModal, setShowModal] = useState(false);

  function onShowModal() {
    setShowModal(true);
  }

  function onCloseModal() {
    setShowModal(false);
  }

  function handleOpenDrawer() {
    navigation.openDrawer();
  }

  return (
    <Fragment>
      <Header
        from={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <Wrapper>
          <BorderlessButton onPress={handleOpenDrawer}>
            <Feather name="menu" size={24} color={colors.secondary} />
          </BorderlessButton>

          <Title>{name === 'Minhas reservas' ? 'Reservas' : name}</Title>
        </Wrapper>

        <BorderlessButton onPress={onShowModal}>
          <Feather name="power" size={24} color={colors.secondary} />
        </BorderlessButton>
      </Header>

      <ModalSignOut visible={showModal} onClose={onCloseModal} />
    </Fragment>
  );
}
