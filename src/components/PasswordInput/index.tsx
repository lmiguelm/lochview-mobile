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

type Props = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  isFilled?: boolean;
};

export const PasswordInput = forwardRef(
  ({ icon, isFilled = false, ...rest }: Props, ref: Ref<TextInput>) => {
    const { colors } = useTheme();

    const [isActive, setIsActive] = useState(false);
    const [showPass, setShowPass] = useState(false);

    function handleFocus() {
      setIsActive(true);
    }

    function handleBlur() {
      setIsActive(false);
    }

    function togglePassword() {
      setShowPass((oldstate) => !oldstate);
    }

    return (
      <Container>
        <IconContainer>
          <Feather
            name={icon}
            size={24}
            color={isFilled || isActive ? colors.primary : colors.text_details}
          />
        </IconContainer>

        <InputText
          {...rest}
          ref={ref}
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

        <AnimatePresence exitBeforeEnter>
          {isActive && (
            <Line
              from={{
                width: '0%',
              }}
              animate={{
                width: '100%',
              }}
              exit={{
                width: '0%',
              }}
              transition={{
                type: 'timing',
                duration: 500,
                easing: Easing.ease,
              }}
            />
          )}
        </AnimatePresence>
      </Container>
    );
  }
);
