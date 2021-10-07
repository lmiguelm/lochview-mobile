import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type Props = {
  active: boolean;
};

export const Container = styled.View<Props>`
  height: 40px;
  width: 40px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  margin-right: -15px;

  ${({ theme, active }) =>
    active
      ? css`
          background-color: ${theme.colors.primary};
        `
      : css`
          background-color: ${theme.colors.text_details};
        `}
`;

export const Icon = styled(Feather)<Props>`
  ${({ theme, active }) =>
    active
      ? css`
          color: ${theme.colors.secondary};
        `
      : css`
          color: ${theme.colors.light_dark};
        `}
`;
