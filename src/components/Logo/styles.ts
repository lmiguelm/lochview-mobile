import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type Props = {
  color?: string;
};

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${({ theme, color }) => (color ? color : theme.colors.light)};
  font-size: ${RFValue(40)}px;

  margin-left: 25px;
`;
