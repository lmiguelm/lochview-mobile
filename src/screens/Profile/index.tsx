import React, { Fragment, useState } from 'react';
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

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';

export function Profile() {
  const { colors } = useTheme();
  const { control } = useForm();
  const { width } = useWindowDimensions();

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

  return (
    <Fragment>
      <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
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
              }}
            >
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
                <Input control={control} icon="user" placeholder="Nome" />
                <Input control={control} icon="mail" placeholder="E-mail" />
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
              <Button title="Salvar" />
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <ToastComponent />
    </Fragment>
  );
}
