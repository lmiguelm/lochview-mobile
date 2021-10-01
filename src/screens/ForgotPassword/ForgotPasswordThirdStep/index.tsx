import React, { useEffect, useState, Fragment, useRef } from 'react';
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

import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// validation
const schema = Yup.object()
  .shape({
    password: Yup.string().required('Senha é obrigatório!'),
    confirmPassword: Yup.string().required('Confirmação de senha é obrigatório!'),
  })
  .required();

type FormData = {
  password: string;
  confirmPassword: string;
};

export function ForgotPasswordThirdStep() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let messageError = '';

    if (errors.password) {
      messageError = errors.password.message;
    } else if (errors.confirmPassword) {
      messageError = errors.confirmPassword.message;
    } else {
      return;
    }

    Toast.show({
      type: 'error',
      text1: 'Ops!',
      text2: messageError,
    });
  }, [errors.password, errors.confirmPassword]);

  async function handleSavePass({ password, confirmPassword }: FormData) {
    setLoading(true);

    try {
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
      navigate('Feedback', {
        nextScreen: 'SignIn',
        title: 'Feito!',
        description: 'Senha alterada com sucesso!',
        type: 'success',
      });
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
              name="password"
              control={control}
              placeholder="Insira a senha"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              hasError={!!errors.password}
            />

            <PasswordInput
              ref={confirmPasswordRef}
              name="confirmPassword"
              control={control}
              placeholder="Insira novamente"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={handleSubmit(handleSavePass)}
              hasError={!!errors.confirmPassword}
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
              onPress={handleSubmit(handleSavePass) as any}
            />
          </Footer>
        </TouchableWithoutFeedback>
      </Container>

      <ToastComponent />
    </Fragment>
  );
}
