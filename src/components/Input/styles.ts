import styled, { css } from 'styled-components/native';

type Props = {
  hasError: boolean;
};

export const Container = styled.View<Props>`
  background-color: ${({ theme }) => theme.colors.light};

  width: 100%;
  height: 56px;

  flex-direction: row;

  border-radius: 4px;

  margin-bottom: 10px;

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.colors.danger};
      border-width: 1px;
    `}
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
