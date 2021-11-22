import React, { Fragment, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';

import Toast from 'react-native-toast-message';

import { ToastComponent } from '../../components/Toast';

import {
  Avatar,
  AvatarContainer,
  CameraContainer,
  Container,
  Content,
  Header,
  Switch,
  SwitchContainer,
  SwitchName,
  ImageWrapper,
  Form,
  Footer,
} from './styles';

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';

import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '../../components/Form/PasswordInput';
import { RFPercentage } from 'react-native-responsive-fontsize';

type FormData = {
  email: string;
  name: string;
};

type FormPassword = {
  password: string;
  newPassword: string;
  confirmPassword: string;
};

export function Profile() {
  const { colors } = useTheme();
  const { control, handleSubmit } = useForm();
  const { width } = useWindowDimensions();

  const inputNameRef = useRef<TextInput>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);
  const inputNewPasswordRef = useRef<TextInput>(null);
  const inputConfirmPasswordRef = useRef<TextInput>(null);

  const [currentSelected, setCurrentSelected] = useState<'data' | 'password'>('data');

  const [avatar, setAvatar] = useState('https://github.com/lmiguelm.png');

  function handleChangeSelected(value: 'data' | 'password') {
    if (value === currentSelected) return;
    setCurrentSelected(value);
  }

  async function pickPicture() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.status !== 'granted') {
      return Toast.show({
        type: 'error',
        text1: 'Permissão negada!',
        text2: 'Não podemos acessar a galeria.',
        position: 'top',
      });
    }

    try {
      const result = (await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        aspect: [4, 3],
      })) as any;

      if (result.cancelled) {
        return;
      }

      if (result.uri) {
        setAvatar(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleChangeData(data: FormData) {
    console.log(data);
  }

  async function handleChangePassword(data: FormPassword) {
    console.log(data);
  }

  return (
    <Fragment>
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header>
              <AvatarContainer>
                <ImageWrapper>
                  <Avatar source={{ uri: avatar }} />
                </ImageWrapper>

                <CameraContainer onPress={pickPicture}>
                  <Feather size={24} name="camera" color={colors.light} />
                </CameraContainer>
              </AvatarContainer>
            </Header>

            <Content>
              <SwitchContainer>
                <TouchableOpacity onPress={() => handleChangeSelected('data')} activeOpacity={0.8}>
                  <Switch active={currentSelected === 'data'}>
                    <SwitchName active={currentSelected === 'data'}>Dados</SwitchName>
                  </Switch>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleChangeSelected('password')}
                  activeOpacity={0.8}
                >
                  <Switch active={currentSelected === 'password'}>
                    <SwitchName active={currentSelected === 'password'}>Trocar senha</SwitchName>
                  </Switch>
                </TouchableOpacity>
              </SwitchContainer>

              <Form
                from={{
                  opacity: 0,
                  transform: [
                    {
                      translateX: 0.25 * width,
                    },
                  ],
                }}
                animate={{
                  opacity: 1,
                  transform: [
                    {
                      translateX: 0,
                    },
                  ],
                }}
                exit={{
                  opacity: 0,
                  transform: [
                    {
                      translateX: -(0.25 * width),
                    },
                  ],
                }}
                transition={{
                  type: 'timing',
                  duration: 1000,
                }}
              >
                {currentSelected === 'data' ? (
                  <>
                    <Input
                      ref={inputNameRef}
                      name="name"
                      control={control}
                      label="Nome"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onSubmitEditing={() => inputEmailRef.current.focus()}
                      returnKeyType="next"
                      children={null}
                      autoComplete={false}
                    />

                    <Input
                      ref={inputEmailRef}
                      name="email"
                      control={control}
                      label="E-mail"
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="email-address"
                      onSubmitEditing={Keyboard.dismiss}
                      returnKeyType="next"
                      children={null}
                      autoComplete={false}
                    />
                  </>
                ) : (
                  <>
                    <PasswordInput
                      ref={inputPasswordRef}
                      name="password"
                      control={control}
                      label="Senha autal"
                      onSubmitEditing={() => inputNewPasswordRef.current.focus()}
                      returnKeyType="next"
                      children={null}
                      autoComplete={false}
                    />

                    <PasswordInput
                      ref={inputNewPasswordRef}
                      name="newPassword"
                      control={control}
                      label="Nova senha"
                      onSubmitEditing={() => inputConfirmPasswordRef.current.focus()}
                      returnKeyType="next"
                      children={null}
                      autoComplete={false}
                    />

                    <PasswordInput
                      ref={inputConfirmPasswordRef}
                      name="ConnfirmPassword"
                      control={control}
                      label="Repetir senha"
                      onSubmitEditing={Keyboard.dismiss}
                      returnKeyType="next"
                      children={null}
                      autoComplete={false}
                    />
                  </>
                )}
              </Form>
            </Content>

            <Footer
              from={{
                opacity: 0,
                transform: [
                  {
                    translateY: 0.25 * width,
                  },
                ],
              }}
              animate={{
                opacity: 1,
                transform: [
                  {
                    translateY: 0,
                  },
                ],
              }}
              exit={{
                opacity: 0,
                transform: [
                  {
                    translateY: -(0.25 * width),
                  },
                ],
              }}
              transition={{
                type: 'timing',
                duration: 1000,
              }}
            >
              <Button
                title="Salvar"
                onPress={
                  currentSelected === 'data'
                    ? handleSubmit(handleChangePassword)
                    : (handleSubmit(handleChangeData) as any)
                }
              />
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <ToastComponent />
    </Fragment>
  );
}
