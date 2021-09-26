import React, { useEffect, useState, Fragment, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';
import { MotiView } from '@motify/components';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import { Container, Description, Form, Title, Footer, Header, BulletContainer } from './styles';

import { ToastComponent } from '../../../components/Toast';
import { Bullet } from '../../../components/Bullet';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function ForgotPasswordFirstStep() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const emailRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);
  const [isEnabledButton, setIsEnabledButton] = useState(false);

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (email.trim().length > 0) {
      return setIsEnabledButton(true);
    } else {
      return setIsEnabledButton(false);
    }
  }, [email]);

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail é obrigatório!').email('E-mail inválido!'),
      });

      await schema.validate({ email });

      navigate('ForgotPasswordSecondStep');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: error.message,
      });
    }
  }

  return (
    <Fragment>
      <Container behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <StatusBar style="dark" translucent={false} backgroundColor={colors.background} />

          <MotiView
            from={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
              delay: 500,
            }}
          >
            <Header>
              <BackButton />

              <BulletContainer>
                <Bullet active />
                <Bullet />
                <Bullet />
              </BulletContainer>
            </Header>

            <Title>Esqueceu a{'\n'}senha?</Title>
            <Description>Relaxa, vamos dar um jeito nisso.</Description>
          </MotiView>

          <Form
            from={{
              opacity: 0,
              translateX: 300,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
          >
            <Input
              ref={emailRef}
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(value) => setEmail(value)}
              isFilled={email.trim().length > 0}
              returnKeyType="next"
              onSubmitEditing={() => handleNextStep()}
            />
          </Form>

          <Footer
            from={{
              opacity: 0,
              translateY: 300,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
          >
            <Button
              title="Próximo"
              loading={loading}
              onPress={handleNextStep}
              enabled={isEnabledButton}
            />
          </Footer>
        </TouchableWithoutFeedback>
      </Container>

      <ToastComponent />
    </Fragment>
  );
}
