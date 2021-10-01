import React, { forwardRef, Ref, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { AnimatePresence } from 'moti';
import { Easing } from 'react-native-reanimated';

import {
  Container,
  IconContainer,
  InputText,
  PasswordVisibility,
  PasswordContainer,
  Line,
} from './styles';

import { useTheme } from 'styled-components';
import { useController, useForm } from 'react-hook-form';

type Props = TextInputProps & {
  hasError?: boolean;
  control: any;
  name: string;
};

export const PasswordInput = forwardRef(
  ({ name, control, hasError = false, ...rest }: Props, ref: Ref<TextInput>) => {
    const { colors } = useTheme();

    const { field } = useController({
      control,
      name,
      defaultValue: '',
    });

    const [showPass, setShowPass] = useState(false);

    function handleTogglePassword() {
      setShowPass((oldstate) => !oldstate);
    }

    return (
      <Container hasError={hasError}>
        <IconContainer>
          <Feather name="lock" size={24} color={hasError ? colors.danger : colors.primary} />
        </IconContainer>

        <InputText
          {...rest}
          ref={ref}
          secureTextEntry={!showPass}
          autoCapitalize="none"
          autoCorrect={false}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
        />

        <PasswordContainer>
          <PasswordVisibility onPress={handleTogglePassword}>
            {showPass ? (
              <Feather name="eye-off" size={24} color={colors.primary} />
            ) : (
              <Feather name="eye" size={24} color={colors.text_details} />
            )}
          </PasswordVisibility>
        </PasswordContainer>
      </Container>
    );
  }
);
