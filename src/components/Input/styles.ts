import styled, { css } from 'styled-components/native';

type Container = {
  active?: boolean;
};

export const Container = styled.View<Container>`
  background-color: ${({ theme }) => theme.colors.light};

  width: 100%;
  height: 56px;

  flex-direction: row;

  border-radius: 5px;

  margin-bottom: 10px;

  ${({ theme, active }) =>
    active &&
    css`
      border-bottom-width: 1.25px;
      border-bottom-color: ${({ theme }) => theme.colors.primary};
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
