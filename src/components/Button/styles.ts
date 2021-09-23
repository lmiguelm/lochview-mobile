import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

type ButtonProps = {
  background?: string;
};

type TitleProps = {
  light?: boolean;
};

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 70px;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  border-radius: 8px;
  background-color: ${({ theme, background }) => (background ? background : theme.colors.primary)};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, light }) => (light ? theme.colors.title : theme.colors.light)};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
`;
