import React, { useState, Fragment, useRef, useEffect } from 'react';
import { Keyboard, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ToastComponent } from '../../components/Toast';
import { PasswordInput } from '../../components/PasswordInput';

import { Container, Description, Form, Title, Footer, Link, Header } from './styles';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const passwordRef = useRef<TextInput>(null);

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

  async function handleSignIn(data: FormData) {
    try {
      setLoading(true);
      // call API
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
              icon="mail"
              name="email"
              placeholder="E-mail"
              control={control}
              hasError={!!errors.email}
              onSubmitEditing={() => passwordRef.current.focus()}
            />

            <PasswordInput
              name="password"
              placeholder="Senha"
              control={control}
              hasError={!!errors.password}
              onSubmitEditing={handleSubmit(handleSignIn)}
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
