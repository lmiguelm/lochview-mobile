import React, { useState, Fragment, useRef, useEffect } from 'react';
import { Keyboard, TextInput as TextInputRef } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { TextInput } from 'react-native-paper';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ToastComponent } from '../../components/Toast';
import { PasswordInput } from '../../components/PasswordInput';

import { Container, Description, Form, Title, Footer, Link, Header, LinkContainer } from './styles';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

const schema = Yup.object()
  .shape({
    email: Yup.string().required('E-mail é obrigatório!').email('E-mail inválido'),
    password: Yup.string().required('Senha é obrigatório!'),
  })
  .required();

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const passwordRef = useRef<TextInputRef>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let errorMessage = '';

    if (errors.email) {
      errorMessage = errors.email.message;
    } else if (errors.password) {
      errorMessage = errors.password.message;
    } else {
      return;
    }

    Toast.show({
      type: 'error',
      text1: 'Ops!',
      text2: errorMessage,
    });
  }, [errors.email, errors.password]);

  async function handleSignIn({ email, password }: FormData) {
    try {
      setLoading(true);
      await signIn(email, password);
      navigate('Dashboard');
    } catch (error) {
      setLoading(false);

      console.log(error);

      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Ocorreu um erro ao realizar a autenticação!',
      });
    }
  }

  function handleForgotPassword() {
    navigate('ForgotPasswordFirstStep');
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
              control={control}
              name="email"
              label="E-mail"
              placeholder="Informe seu e-mail"
              error={!!errors.email}
              onSubmitEditing={() => passwordRef.current.focus()}
              autoComplete={true}
              keyboardType="email-address"
              returnKeyType="next"
              children={null}
            />

            <PasswordInput
              ref={passwordRef}
              control={control}
              name="password"
              label="Senha"
              placeholder="Informe sua senha"
              error={!!errors.password}
              onSubmitEditing={handleSubmit(handleSignIn)}
              children={null}
              autoComplete={false}
              returnKeyType="send"
            />

            <LinkContainer onPress={handleForgotPassword}>
              <Link>Esqueci a senha</Link>
            </LinkContainer>
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
              onPress={handleSubmit(handleSignIn) as any}
              enabled={true}
            />
          </Footer>
        </TouchableWithoutFeedback>
      </Container>

      <ToastComponent />
    </Fragment>
  );
}
