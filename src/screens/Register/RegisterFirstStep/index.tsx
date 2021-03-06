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
import { Picker } from '../../../components/Form/Picker';
import { CPFInput } from '../../../components/Form/CPFInput';
import { PhoneInput } from '../../../components/Form/PhoneInput';

import { Container, Description, Form, Title, Footer, Header } from './styles';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';

import { Genero } from '../types';

const schema = Yup.object()
  .shape({
    nome: Yup.string().required('Nome é obrigatório!'),
    cpf: Yup.string().required('CPF é obrigatório!').length(14, 'CPF inválido!'),
    telefone: Yup.string().required('Telefone é obrigatório!').length(19, 'Telefone inválido!'),
  })
  .required();

type FormData = {
  nome: string;
  cpf: string;
};

export function RegisterFirstStep() {
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

  const [loading, setLoading] = useState(false);

  const [genero, setGenero] = useState<Genero>('');

  useEffect(() => {
    let errorMessage = '';

    if (errors.nome) {
      errorMessage = errors.nome.message;
    } else if (errors.cpf) {
      errorMessage = errors.cpf.message;
    } else if (errors.telefone) {
      errorMessage = errors.telefone.message;
    } else {
      return;
    }

    Toast.show({
      type: 'error',
      text1: 'Ops!',
      text2: errorMessage,
    });
  }, [errors.nome, errors.cpf, errors.telefone]);

  async function handleNextStep({ nome, cpf }: FormData) {
    try {
      setLoading(true);

      if (genero === '') throw new Error('Selecione um genero!');

      const data = {
        nome,
        cpf,
        genero,
      };

      navigate('RegisterSecondStep', data);
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

            <Title>Quem é você?</Title>
            <Description>Preencha o formulário abaixo para se cadastrar</Description>
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
              name="nome"
              label="Nome"
              placeholder="Informe seu nome"
              error={!!errors.nome}
              autoComplete={true}
              returnKeyType="next"
              children={null}
            />

            <Picker
              placeholder="Selecione seu genero"
              selectedValue={genero}
              onValueChange={(value: Genero) => setGenero(value)}
              options={[
                {
                  label: 'Masculino',
                  value: 'Masculino',
                },
                {
                  label: 'Feminino',
                  value: 'Feminino',
                },
              ]}
            />

            <CPFInput
              control={control}
              name="cpf"
              error={!!errors.cpf}
              children={null}
              autoComplete={false}
              returnKeyType="next"
            />

            <PhoneInput
              control={control}
              name="telefone"
              error={!!errors.cpf}
              onSubmitEditing={handleSubmit(handleNextStep)}
              children={null}
              autoComplete={false}
              returnKeyType="send"
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
              title="Continuar"
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
