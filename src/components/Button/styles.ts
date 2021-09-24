import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

type ButtonProps = {
  background?: string;
  disabled?: boolean;
};

type TitleProps = {
  light?: boolean;
};

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  border-radius: 5px;
  background-color: ${({ theme, background }) => (background ? background : theme.colors.primary)};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
    `}
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, light }) => (light ? theme.colors.title : theme.colors.light)};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;
