import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(Picker)`
  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 6px;
`;

export const Item = styled(Picker.Item)`
  font-size: ${RFValue(16)}px;
`;
