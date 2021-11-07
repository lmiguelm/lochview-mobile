import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input, Icon } from './styles';

type Props = TextInputProps & {};

export function SearchInput({ ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <Container
      style={{
        elevation: 10,
      }}
    >
      <Icon active={isFocused} name="search" size={24} />
      <Input {...rest} onFocus={handleFocus} onBlur={handleBlur} returnKeyType="search" />
    </Container>
  );
}
