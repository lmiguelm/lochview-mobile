import React, { useEffect, useState, Fragment, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Button';

import { Container, Description, Form, Title, Footer, Header, BulletContainer } from './styles';

import { useTheme } from 'styled-components';
import { ToastComponent } from '../../../components/Toast';
import { Bullet } from '../../../components/Bullet';
import { MotiView } from '@motify/components';
import { PasswordInput } from '../../../components/PasswordInput';

export function ForgotPasswordThirdStep() {
  const { colors } = useTheme();

  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);
  const [isEnabledButton, setIsEnabledButton] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    console.log({ a: password.length, b: confirmPassword.length });
    if (password.trim().length > 0 && confirmPassword.trim().length > 0) {
      return setIsEnabledButton(true);
    } else {
      return setIsEnabledButton(false);
    }
  }, [password, confirmPassword]);

  async function handleSubmit() {
    setLoading(true);

    try {
      // validation
      const schema = Yup.object().shape({
        password: Yup.string().required('Senha é obrigatório!'),
        confirmPassword: Yup.string().required('Senha é obrigatório!'),
      });

      const data = { password, confirmPassword };
      await schema.validate(data);

      if (password !== confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Ops!',
          text2: 'As senhas não são iguais!',
        });
        setLoading(false);
        return;
      }

      // todo - navigate
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
          text2: 'Ocorreu um erro ao tentar buscar o e-mail. Tente novamente!',
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
                <Bullet />
                <Bullet active />
              </BulletContainer>
            </Header>

            <Title>Opa! Última{'\n'}etapa</Title>
            <Description>Informe a sua nova senha para finalizar.</Description>
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
            <PasswordInput
              ref={passwordRef}
              icon="lock"
              placeholder="Insira a senha"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(value) => setPassword(value)}
              isFilled={password.trim().length > 0}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />

            <PasswordInput
              ref={confirmPasswordRef}
              icon="lock"
              placeholder="Insira novamente"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              isFilled={confirmPassword.trim().length > 0}
              returnKeyType="done"
              onSubmitEditing={handleSubmit}
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
              title="Concluir"
              loading={loading}
              onPress={handleSubmit}
              enabled={isEnabledButton}
            />
          </Footer>
        </TouchableWithoutFeedback>
      </Container>

      <ToastComponent />
    </Fragment>
  );
}
