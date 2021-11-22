import React, { Ref, forwardRef } from 'react';
import { useController } from 'react-hook-form';
import { TextInput as TextInputRef } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';

import { useTheme } from 'styled-components';

type Props = React.ComponentProps<typeof TextInput>;

export const CEPInput = forwardRef(({ ...rest }: Props, ref: Ref<TextInputRef>) => {
  const { colors, fonts } = useTheme();

  return (
    <TextInput
      {...rest}
      label="CEP"
      placeholder="Informe seu CEP"
      ref={ref}
      mode="outlined"
      activeOutlineColor={colors.primary}
      outlineColor={colors.light}
      placeholderTextColor={colors.light_dark}
      selectionColor={colors.primary}
      keyboardType="numeric"
      style={{
        backgroundColor: colors.light,
        fontFamily: fonts.regular,
        fontSize: 16,
      }}
      render={(props) => (
        <MaskedTextInput {...(props as MaskedTextInputProps)} type="custom" mask="99999-999" />
      )}
    />
  );
});
