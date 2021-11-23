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

import { Container, Description, Form, Title, Footer, Header } from './styles';

import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import { RegisterSecondStepParams, RegisterSecondThirdParams } from '../../../routes/index.routes';
import { states } from '../../../utils/states';
import { CEPInput } from '../../../components/Form/CEPInput';
import { Textarea } from '../../../components/Form/Textarea';

const schema = Yup.object()
  .shape({
    cidade: Yup.string().required('Cidade é obrigatória!'),
    endereco: Yup.string().required('Endereço é obrigatório!'),
  })
  .required();

type FormData = {
  cidade: string;
  endereco: string;
  complemento: string;
};

type ResponseCepAPI = {
  city: string;
  state: string;
  street: string;
};

export function RegisterSecondStep() {
  const { colors } = useTheme();

  const { navigate } = useNavigation();

  const { params } = useRoute();
  const newUser = params as RegisterSecondStepParams;

  const [loading, setLoading] = useState(false);

  const [cep, setCep] = useState('');

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const [estado, setEstado] = useState('');

  useEffect(() => {
    if (cep.length === 9) {
      loadDataByCep();
    }
  }, [cep]);

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

  async function loadDataByCep() {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
    const { city, state, street } = (await response.json()) as ResponseCepAPI;

    setValue('cidade', city);
    setValue('endereco', street);
    setEstado(state);
  }

  async function handleNextStep({ cidade, endereco, complemento }: FormData) {
    try {
      if (cep === '') throw new Error('CEP é obrigatório!');
      if (estado === '') throw new Error('Estado é obrigatório!');

      const data = {
        ...newUser,
        estado,
        cep,
        cidade,
        endereco,
        complemento,
      } as RegisterSecondThirdParams;

      navigate('RegisterThirdStep', data);
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
      <Container>
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

            <Title>Precisamos de{'\n'}seu endereço</Title>
            <Description>Informe seu endereço atual</Description>
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
            <CEPInput
              value={cep}
              onChangeText={(value) => setCep(value)}
              error={!!errors.nome}
              autoComplete={true}
              returnKeyType="next"
              children={null}
            />

            <Picker
              placeholder="Selecione seu estado"
              selectedValue={estado}
              onValueChange={(value) => setEstado(String(value))}
              options={states}
            />

            <Input
              control={control}
              name="cidade"
              label="Cidade"
              placeholder="Informe sua cidade"
              error={!!errors.nome}
              autoComplete={true}
              returnKeyType="next"
              children={null}
            />

            <Input
              control={control}
              name="endereco"
              label="Endereço"
              placeholder="Informe seu endereço "
              error={!!errors.endereco}
              autoComplete={true}
              returnKeyType="next"
              children={null}
            />

            <Textarea
              control={control}
              name="complemento"
              label="Complemento"
              placeholder="Complemento opcional"
              error={!!errors.complemento}
              autoComplete={true}
              returnKeyType="next"
              children={null}
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
