import React, { useEffect, useState, Fragment, useCallback, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { MotiView } from '@motify/components';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Form/Button';
import { Input } from '../../../components/Form/Input';

import { Container, Description, Form, Title, Footer, Header, BulletContainer } from './styles';

import { ToastComponent } from '../../../components/Toast';
import { Bullet } from '../../../components/Bullet';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const schema = Yup.object()
  .shape({
    email: Yup.string().required('E-mail é obrigatório!').email('E-mail inválido!'),
  })
  .required();

export function ForgotPasswordFirstStep() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const emailRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (errors.email && errors.email.message) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: errors.email.message,
      });
    }
  }, [errors.email]);

  async function handleNextStep() {
    try {
      setLoading(true);
      navigate('ForgotPasswordSecondStep');
    } catch (error) {
      setLoading(false);
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
              name="email"
              control={control}
              ref={emailRef}
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={handleSubmit(handleNextStep)}
              hasError={!!errors.email}
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
              onPress={handleSubmit(handleNextStep) as any}
            />
          </Footer>
        </TouchableWithoutFeedback>
      </Container>

      <ToastComponent />
    </Fragment>
  );
}
