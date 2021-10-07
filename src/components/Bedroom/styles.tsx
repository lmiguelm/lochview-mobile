import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
`;

export const Background = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Title = styled.Text`
  padding: 30px;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(24)}px;
`;
