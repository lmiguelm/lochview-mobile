import React, { memo } from 'react';
import { Modal } from 'react-native';

import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/useAuth';

import { Container, Overlay, Title, ButtonsContainer, Button, ButtonTitle } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
};

function ModalSignOutComponent({ visible, onClose }: Props) {
  const { colors } = useTheme();
  const { signOut } = useAuth();

  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      onTouchCancel={onClose}
      onTouchEnd={onClose}
    >
      <Overlay>
        <Container>
          <Title>Tem certeza que deseja realmente sair?</Title>

          <ButtonsContainer>
            <Button
              activeOpacity={0.7}
              onPress={onClose}
              style={{ width: '40%', backgroundColor: colors.light_dark }}
            >
              <ButtonTitle>Não</ButtonTitle>
            </Button>

            <Button
              activeOpacity={0.7}
              onPress={signOut}
              style={{ width: '40%', backgroundColor: colors.danger }}
            >
              <ButtonTitle style={{ color: colors.light }}>Sim</ButtonTitle>
            </Button>
          </ButtonsContainer>
        </Container>
      </Overlay>
    </Modal>
  );
}

export const ModalSignOut = memo(ModalSignOutComponent);
