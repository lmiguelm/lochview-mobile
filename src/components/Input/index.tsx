import React, { forwardRef, Ref, useState } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, IconContainer, InputText, Line } from './styles';

import { useTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Easing } from 'react-native-reanimated';

type Props = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  isFilled?: boolean;
};

export const Input = forwardRef(
  ({ icon, isFilled = false, ...rest }: Props, ref: Ref<TextInput>) => {
    const { colors } = useTheme();

    const [isActive, setIsActive] = useState(false);

    function handleFocus() {
      setIsActive(true);
    }

    function handleBlur() {
      setIsActive(false);
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

        <InputText ref={ref} {...rest} onFocus={handleFocus} onBlur={handleBlur} />

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
