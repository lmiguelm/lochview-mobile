import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;

  min-height: 80px;
  padding: 10px;

  flex-direction: row;
`;

export const Background = styled.Image`
  flex: 1;
  height: 100%;
  border-radius: 4px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(16)}px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Description = styled.Text`
  margin: 10px 0;
`;

export const PriceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_details};
  font-size: ${RFValue(12)}px;
  margin-right: 5px;
`;
