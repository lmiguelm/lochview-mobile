import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { MotiView } from '@motify/components';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};

  padding: ${getStatusBarHeight() + 30}px 30px 30px 30px;
`;

export const Header = styled(MotiView)``;

export const Title = styled.Text`
  margin-top: 30px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: justify;
  line-height: 50px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_details};
  text-align: justify;
  line-height: 25px;

  margin-top: 16px;
`;

export const Form = styled(MotiView)`
  margin: 64px 0;
`;

export const Link = styled.Text`
  align-self: flex-end;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text_details};

  margin-top: 5px;
`;

export const Footer = styled(MotiView)``;
