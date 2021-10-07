import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: red;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.overlay};
`;

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  align-self: flex-end;
  justify-content: center;
  align-items: center;

  padding: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ButtonsContainer = styled.View`
  width: 100%;

  margin-top: 30px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  border-radius: 5px;
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;
