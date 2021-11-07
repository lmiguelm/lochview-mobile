import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;

  padding: 0 30px;
  margin-top: ${getStatusBarHeight() + 30}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
`;

export const Id = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusIcon = styled.View`
  height: 16px;
  width: 16px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.success};

  margin-right: 10px;
`;

export const Status = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const Content = styled.View`
  margin-top: 30px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
`;

export const QrCodeContainer = styled.View`
  align-self: center;
  margin-top: 60px;
`;

export const Footer = styled.View`
  margin: 60px 0;
`;
