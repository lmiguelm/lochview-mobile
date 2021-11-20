import React from 'react';
import { TextInput } from 'react-native-paper';

import { useTheme } from 'styled-components';

type Props = React.ComponentProps<typeof TextInput>;

export function SearchInput({ ...props }: Props) {
  const { colors, fonts } = useTheme();

  return (
    <TextInput
      {...props}
      mode="flat"
      underlineColor={colors.light_dark}
      activeUnderlineColor={colors.primary}
      placeholderTextColor={colors.light_dark}
      autoCorrect={false}
      selectionColor={colors.primary}
      right={<TextInput.Icon name="magnify" disabled={props.value === ''} color={colors.primary} />}
      returnKeyType="search"
      style={{
        backgroundColor: colors.light,
        fontFamily: fonts.regular,
        fontSize: 16,
      }}
    />
  );
}
