import styled from 'styled-components/native';
import { MotiScrollView, MotiView } from 'moti';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(MotiView)`
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  margin-bottom: 50px;
`;

export const Form = styled(MotiView)`
  width: 100%;

  padding: 0 30px;

  position: absolute;
  bottom: -25px;
`;

export const Content = styled(MotiView)`
  padding: 0px 30px 20px 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ReserveLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
`;

export const ReserveValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(14)}px;
`;
