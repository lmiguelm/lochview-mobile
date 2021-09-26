import styled from 'styled-components/native';

type ContainerProps = {
  active: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 10px;
  height: 10px;

  border-radius: 5px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.text_details};

  margin-right: 5px;
`;
