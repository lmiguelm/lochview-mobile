import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: ${getStatusBarHeight() + 30}px 30px 0 30px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  padding-top: 30px;

  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
`;

export const Period = styled.View`
  padding-top: 30px;
  padding-bottom: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StartContainer = styled.View`
  width: 90px;

  border-bottom-width: 0.75px;
  border-bottom-color: ${({ theme }) => theme.colors.light_dark};
`;

export const PeriodName = styled.Text`
  color: ${({ theme }) => theme.colors.light_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const Footer = styled.View`
  padding: 0 30px;
`;
