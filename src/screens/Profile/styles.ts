import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MotiView } from 'moti';

type SwitchProps = {
  active?: boolean;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(MotiView)`
  height: ${RFPercentage(18)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const AvatarContainer = styled.View`
  align-self: center;

  position: absolute;
  bottom: -90px;
`;

export const Avatar = styled.Image`
  height: 180px;
  width: 180px;
  border-radius: 90px;
`;

export const ImageWrapper = styled.View`
  height: 190px;
  width: 190px;
  border-radius: 95px;

  background-color: ${({ theme }) => theme.colors.secondary};

  justify-content: center;
  align-items: center;
`;

export const CameraContainer = styled(RectButton)`
  height: 50px;
  width: 50px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Content = styled.View`
  margin-top: 130px;
  padding: 0 30px;
`;

export const SwitchContainer = styled.View`
  align-self: center;
  flex-direction: row;

  border-bottom-width: 0.75px;
  border-bottom-color: ${({ theme }) => theme.colors.text_details};

  position: absolute;
`;

export const Switch = styled.View<SwitchProps>`
  margin: 0 30px 0 30px;

  ${({ theme, active }) =>
    active &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary};
    `}
`;

export const SwitchName = styled.Text<SwitchProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text_details)};
  font-size: ${RFValue(16)}px;
`;

export const Form = styled(MotiView)`
  margin-top: 90px;
`;

export const Footer = styled(MotiView)`
  padding: 0 30px;
  margin: 30px 0;
`;
