import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast, { SuccessToast, ErrorToast } from 'react-native-toast-message';

import { useTheme } from 'styled-components';

export function ToastComponent() {
  const { colors, fonts } = useTheme();

  const toastConfig = {
    success: (props) => (
      <SuccessToast
        {...props}
        text1Style={{
          fontFamily: fonts.bold,
          fontSize: RFValue(16),
          color: colors.title,
        }}
        text2Style={{
          fontFamily: fonts.regular,
          fontSize: RFValue(14),
          color: colors.text,
        }}
        onPress={handleCloseToast}
        onTrailingIconPress={handleCloseToast}
        onLeadingIconPress={handleCloseToast}
      />
    ),

    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontFamily: fonts.bold,
          fontSize: RFValue(16),
          color: colors.title,
        }}
        text2Style={{
          fontFamily: fonts.regular,
          fontSize: RFValue(14),
          color: colors.text,
        }}
        onPress={handleCloseToast}
        onTrailingIconPress={handleCloseToast}
        onLeadingIconPress={handleCloseToast}
      />
    ),
  };

  function handleCloseToast() {
    Toast.hide();
  }

  return (
    <Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig} autoHide visibilityTime={2000} />
  );
}
