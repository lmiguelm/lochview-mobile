import React, { forwardRef, Ref } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useController } from 'react-hook-form';

import { Container, IconContainer, InputText } from './styles';

import { useTheme } from 'styled-components';

type Props = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  control: any;
  name?: string;
  hasError?: boolean;
};

export const Input = forwardRef(
  ({ icon, control, name, hasError = false, ...rest }: Props, ref: Ref<TextInput>) => {
    const { colors } = useTheme();

    const { field } = useController({
      control,
      name,
      defaultValue: '',
    });

    return (
      <Container hasError={hasError}>
        <IconContainer>
          <Feather name={icon} size={24} color={hasError ? colors.danger : colors.primary} />
        </IconContainer>

        <InputText
          {...rest}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
        />
      </Container>
    );
  }
);
