import React from 'react';
import { PickerProps } from '@react-native-picker/picker';

import { Container, Item } from './styles';

import { useTheme } from 'styled-components';

type Option = {
  label: string;
  value: string;
};

type Props = PickerProps & {
  options: Option[];
  placeholder: string;
};

export function Picker({ options, placeholder, ...props }: Props) {
  const { colors } = useTheme();

  const optionsFormated: Option[] = [
    {
      label: placeholder,
      value: '',
    },
    ...options,
  ];

  return (
    <Container {...props}>
      {optionsFormated.map((option) => (
        <Item
          key={option.value}
          value={option.value}
          label={option.label}
          color={option.value === '' ? '#888' : colors.text}
          enabled={option.value !== ''}
        />
      ))}
    </Container>
  );
}
