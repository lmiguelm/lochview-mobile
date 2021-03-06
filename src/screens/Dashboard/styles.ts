import styled from 'styled-components/native';
import { MotiScrollView, MotiView } from 'moti';
import { RectButton } from 'react-native-gesture-handler';

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
`;

export const Groups = styled(MotiScrollView)``;

export const Group = styled(RectButton)`
  height: 70px;
  width: 70px;
  background-color: ${({ theme }) => theme.colors.light};

  margin-right: 10px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;
