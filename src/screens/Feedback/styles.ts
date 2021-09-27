import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: space-around;

  padding: 0 30px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin-top: -${RFPercentage(25)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(30)}px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.light_dark};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;
