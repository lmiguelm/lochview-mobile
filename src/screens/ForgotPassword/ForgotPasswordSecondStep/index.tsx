import React, { useEffect, useState, Fragment, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import { Container, Description, Form, Title, Footer, Header, BulletContainer } from './styles';

import { ToastComponent } from '../../../components/Toast';
import { Bullet } from '../../../components/Bullet';
import { MotiView } from '@motify/components';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function ForgotPasswordSecondStep() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const codeRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);
  const [isEnabledButton, setIsEnabledButton] = useState(false);

  const [code, setCode] = useState('');

  useEffect(() => {
    if (code.trim().length === 6) {
      return setIsEnabledButton(true);
    } else {
      return setIsEnabledButton(false);
    }
  }, [code]);

  async function handleNextStep() {
    setLoading(true);

    try {
      // validation
      const schema = Yup.object().shape({
        code: Yup.number().positive(),
      });

      await schema.validate({ code });

      // todo - navigate to dashboard
      navigate('ForgotPasswordThirdStep');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Toast.show({
          type: 'error',
          text1: 'Ops!',
          text2: error.message,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Ops!',
          text2: 'Código inválido!',
        });
      }

      setLoading(false);
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
                <Bullet />
                <Bullet active />
                <Bullet />
              </BulletContainer>
            </Header>

            <Title>Quase lá...</Title>
            <Description>Informe o código que foi enviado{'\n'}no seu e-mail</Description>
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
              ref={codeRef}
              icon="lock"
              placeholder="Código"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              value={code}
              onChangeText={(value) => setCode(value)}
              isFilled={code.trim().length === 6}
              returnKeyType="next"
              onSubmitEditing={() => handleNextStep()}
              maxLength={6}
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
