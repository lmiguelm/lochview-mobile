import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, IconContainer, InputText } from './styles';

import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  isFilled?: boolean;
};

export function Input({ icon, isFilled = false, ...rest }: Props) {
  const { colors } = useTheme();

  const [isActive, isActice] = useState(false);

  function handleFocus() {
    isActice(true);
  }

  function handleBlur() {
    isActice(false);
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

      <InputText {...rest} onFocus={handleFocus} onBlur={handleBlur} />
    </Container>
  );
}
