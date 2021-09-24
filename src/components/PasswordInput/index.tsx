import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  InputText,
  PasswordVisibility,
  PasswordContainer,
} from './styles';

import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  isFilled?: boolean;
};

export function PasswordInput({ icon, isFilled = false, ...rest }: Props) {
  const { colors } = useTheme();

  const [isActive, isActice] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleFocus() {
    isActice(true);
  }

  function handleBlur() {
    isActice(false);
  }

  function togglePassword() {
    setShowPass((oldstate) => !oldstate);
  }

  return (
    <Container active={isActive || isFilled}>
      <IconContainer>
        <Feather
          name={icon}
          size={24}
          color={isFilled || isActive ? colors.primary : colors.text_details}
        />
      </IconContainer>

      <InputText
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={!showPass}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <PasswordContainer>
        <PasswordVisibility onPress={togglePassword}>
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
