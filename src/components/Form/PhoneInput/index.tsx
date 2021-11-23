import React, { Ref, forwardRef } from 'react';
import { useController } from 'react-hook-form';
import { TextInput as TextInputRef } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';

import { useTheme } from 'styled-components';

type Props = React.ComponentProps<typeof TextInput> & {
  control: any;
  name: string;
};

export const PhoneInput = forwardRef(
  ({ control, name, ...rest }: Props, ref: Ref<TextInputRef>) => {
    const { colors, fonts } = useTheme();

    const { field } = useController({
      control,
      name,
      defaultValue: '',
    });

    return (
      <TextInput
        {...rest}
        label="Telefone"
        placeholder="Informe seu telefone"
        ref={ref}
        value={field.value}
        onChangeText={field.onChange}
        mode="outlined"
        onBlur={field.onBlur}
        activeOutlineColor={colors.primary}
        outlineColor={colors.light}
        placeholderTextColor={colors.light_dark}
        selectionColor={colors.primary}
        style={{
          backgroundColor: colors.light,
          fontFamily: fonts.regular,
          fontSize: 16,
        }}
        render={(props) => (
          <MaskedTextInput
            {...(props as MaskedTextInputProps)}
            type="custom"
            mask="+99 (99) 99999-9999"
          />
        )}
      />
    );
  }
);
