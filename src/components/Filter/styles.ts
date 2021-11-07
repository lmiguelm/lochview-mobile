import styled from 'styled-components/native';
import { MotiScrollView } from 'moti';
import { RectButton } from 'react-native-gesture-handler';

type Props = {
  active: boolean;
};

export const Container = styled(MotiScrollView)``;

export const Group = styled(RectButton)<Props>`
  height: 70px;
  width: 70px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.secondary : theme.colors.light};

  margin-right: 10px;

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;
