import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MotiView, MotiScrollView } from 'moti';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.light};
`;

export const Header = styled(MotiView)`
  height: 115px;

  padding: 0 30px;
  padding-top: ${getStatusBarHeight()}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled(MotiScrollView)`
  width: 100%;
  padding: 0 30px;

  margin-bottom: 30px;
`;

export const Slider = styled.Image`
  width: 100%;
`;

export const BedroomHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 30px 0;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: 24px;
  text-align: justify;
`;

export const ItensTitle = styled.Text`
  margin: 30px 0;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const Items = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled(RectButton)`
  height: ${RFPercentage(13.5)}px;
  width: ${RFPercentage(13.5)}px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.background};

  margin-bottom: 10px;
  margin-right: 5px;
`;

export const ItemName = styled.Text`
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const Footer = styled(MotiView)`
  padding: 20px 30px 0 30px;
  background: ${({ theme }) => theme.colors.background};
`;
