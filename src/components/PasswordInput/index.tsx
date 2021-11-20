import React, { Ref, forwardRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { TextInput as TextInputRef } from 'react-native';
import { TextInput } from 'react-native-paper';

import { useTheme } from 'styled-components';

type Props = React.ComponentProps<typeof TextInput> & {
  control: any;
  name: string;
};

export const PasswordInput = forwardRef(
  ({ control, name, ...rest }: Props, ref: Ref<TextInputRef>) => {
    const { colors, fonts } = useTheme();

    const { field } = useController({
      control,
      name,
      defaultValue: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    function handleTogglePassword() {
      setShowPassword((oldstate) => !oldstate);
    }

    return (
      <TextInput
        {...rest}
        ref={ref}
        value={field.value}
        onChangeText={field.onChange}
        mode="outlined"
        onBlur={field.onBlur}
        activeOutlineColor={colors.primary}
        outlineColor={colors.light}
        placeholderTextColor={colors.light_dark}
        selectionColor={colors.primary}
        secureTextEntry={!showPassword}
        autoComplete={false}
        autoCorrect={false}
        autoCapitalize="none"
        right={
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            onPress={handleTogglePassword}
            color={colors.primary}
          />
        }
        style={{
          backgroundColor: colors.light,
          fontFamily: fonts.regular,
          fontSize: 16,
        }}
      />
    );
  }
);
