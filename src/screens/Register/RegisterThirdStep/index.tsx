import React, { useState, Fragment, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { BackButton } from '../../../components/BackButton';
import { Button } from '../../../components/Form/Button';
import { Input } from '../../../components/Form/Input';
import { ToastComponent } from '../../../components/Toast';

import { Container, Description, Form, Title, Footer, Header } from './styles';

import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PasswordInput } from '../../../components/Form/PasswordInput';
import { RegisterSecondThirdParams } from '../../../routes/index.routes';
import { useAuth } from '../../../hooks/useAuth';

const schema = Yup.object()
  .shape({
    email: Yup.string().required('E-mail é obrigatório!').email('E-mail inválido'),
    senha: Yup.string().required('Senha é obrigatória!'),
    confirmacao: Yup.string().required('Confirmação de senha obrigatória!'),
  })
  .required();

type FormData = {
  email: string;
  senha: string;
  confirmacao: string;
};

export function RegisterThirdStep() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const { params } = useRoute();
  const user = params as RegisterSecondThirdParams;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let errorMessage = '';

    if (errors.nome) {
      errorMessage = errors.nome.message;
    } else if (errors.cpf) {
      errorMessage = errors.cpf.message;
    } else {
      return;
    }

    Toast.show({
      type: 'error',
      text1: 'Ops!',
      text2: errorMessage,
    });
  }, [errors.nome, errors.cpf]);

  async function handleRegister({ email, senha, confirmacao }: FormData) {
    if (senha !== confirmacao) {
      throw new Error('As senhas não são iguais!');
    }

    try {
      const registerData = {
        cpf: user.cpf,
        email,
        senha,
      };

      // criar usuário

      // salvar endereço e telefone

      signIn(email, senha);
    } catch (error) {
      setLoading(false);

      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: error.message ?? 'Ocorreu um erro ao realizar a autenticação!',
      });
    }
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

            <Title>Falta pouco</Title>
            <Description>Cadastre suas informações para login</Description>
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
              autoComplete={true}
              returnKeyType="next"
              children={null}
            />

            <PasswordInput
              control={control}
              name="senha"
              label="Senha"
              placeholder="Informe sua senha"
              children={null}
              autoComplete={true}
              returnKeyType="next"
              error={!!errors.senha}
            />

            <PasswordInput
              control={control}
              name="confirmacao"
              label="Confirmação"
              placeholder="Repita sua senha"
              children={null}
              autoComplete={true}
              returnKeyType="next"
              error={!!errors.confirmacao}
              onSubmitEditing={handleSubmit(handleRegister)}
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
              title="Finalizar"
              loading={loading}
              onPress={handleSubmit(handleRegister) as any}
            />
          </Footer>
        </TouchableWithoutFeedback>
      </Container>

      <ToastComponent />
    </Fragment>
  );
}
