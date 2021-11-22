import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type Props = {
  active: boolean;
};

export const Container = styled.View`
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 56px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.light};
`;

export const Icon = styled(Feather)<Props>`
  padding-left: 10px;
  color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.text_details)};
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0 20px;
`;
