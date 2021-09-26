import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Description, Form, Title, Footer, Link, Header } from './styles';

import { useTheme } from 'styled-components';
import { PasswordInput } from '../../components/PasswordInput';
import { ToastComponent } from '../../components/Toast';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido!').required('E-mail é obrigatório!'),
  password: Yup.string().required('Senha é obrigatória!'),
});

export function SignIn() {
  const { colors } = useTheme();

  const [loading, setLoading] = useState(false);
  const [isEnabledButton, setIsEnabledButton] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (email.trim().length > 0 && password.trim().length > 0) {
      return setIsEnabledButton(true);
    } else {
      return setIsEnabledButton(false);
    }
  }, [email, password]);

  const handleSubmit = useCallback(async () => {
    setLoading(true);

    try {
      // validation
      const data = { email, password };
      await schema.validate(data);

      // todo - navigate to dashboard
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Toast.show({
          type: 'error',
          text1: 'Ops!',
          text2: error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  }, [loading]);

  function handleForgotPassword() {
    // navigate to reset password
  }

  return (
    <Fragment>
      <Container behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <StatusBar style="dark" translucent={false} backgroundColor={colors.background} />

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
              delay: 500,
            }}
          >
            <BackButton />

            <Title>Estamos{'\n'}quase lá.</Title>
            <Description>Faça seu login para começar{'\n'}uma experiência incrível.</Description>
          </Header>

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
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(value) => setEmail(value)}
              isFilled={email.trim().length > 0}
            />

            <PasswordInput
              icon="lock"
              placeholder="Senha"
              value={password}
              onChangeText={(value) => setPassword(value)}
              isFilled={password.trim().length > 0}
            />

            <TouchableOpacity activeOpacity={0.7} onPress={handleForgotPassword}>
              <Link>Esqueci a senha</Link>
            </TouchableOpacity>
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
              title="Entrar"
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
