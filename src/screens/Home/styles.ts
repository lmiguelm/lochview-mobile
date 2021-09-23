import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { MotiView, MotiText } from 'moti';

export const Container = styled.ImageBackground`
  flex: 1;

  justify-content: space-between;
  align-items: center;

  padding-top: ${getStatusBarHeight() + 60}px;
  padding-bottom: 60px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled(MotiText)`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: ${RFValue(80)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled(MotiView)`
  width: 100%;
  padding: 0 30px;
`;
