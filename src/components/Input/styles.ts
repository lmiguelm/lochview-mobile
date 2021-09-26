import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};

  width: 100%;
  height: 56px;

  flex-direction: row;

  border-radius: 4px;

  margin-bottom: 10px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 56px;

  border-right-width: 2px;
  border-color: ${({ theme }) => theme.colors.background};
`;

export const InputText = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light};

  padding: 0 23px;

  border-radius: 5px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Line = styled(MotiView)`
  height: 2px;
  width: 0%;

  position: absolute;

  background-color: ${({ theme }) => theme.colors.primary};

  bottom: 0;
`;
