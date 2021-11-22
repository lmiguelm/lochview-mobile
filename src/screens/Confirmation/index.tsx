import React, { useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Bedroom } from '../../components/Bedroom';
import { Button } from '../../components/Form/Button';

import {
  Container,
  Content,
  Footer,
  Header,
  Id,
  Label,
  QrCodeContainer,
  Row,
  Status,
  StatusContainer,
  StatusIcon,
  Value,
} from './styles';

import { useTheme } from 'styled-components';

export function Confirmation() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => false);
  }, []);

  function handleToMyReserves() {
    navigate('PrivateDrawer');
  }

  return (
    <Container>
      <Bedroom enabled={false} />

      <Header>
        <Id>#2021030601</Id>

        <StatusContainer>
          <StatusIcon />
          <Status>Ativo</Status>
        </StatusContainer>
      </Header>

      <Content>
        <Row>
          <Label>De </Label>
          <Value>06/03/2021 </Value>
          <Label>até </Label>
          <Value>09/03/2021</Value>
        </Row>

        <Row>
          <Label>Total de dias: </Label>
          <Value>3</Value>
        </Row>

        <Row>
          <Label>Total a pagar: </Label>
          <Value>R$ 3,600.00</Value>
        </Row>

        <QrCodeContainer>
          <QRCode value="http://awesome.link.qr" color={colors.text} size={200} />
        </QrCodeContainer>
      </Content>

      <Footer>
        <Button title="Continuar" onPress={handleToMyReserves} />
        <Button title="Salvar PDF" background={colors.light} light />
      </Footer>
    </Container>
  );
}
