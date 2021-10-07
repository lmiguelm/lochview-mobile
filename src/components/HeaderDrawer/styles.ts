import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { MotiView } from 'moti';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = styled(MotiView)`
  height: 115px;
  background-color: ${({ theme }) => theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(32)}px;

  margin-left: 25px;
`;
