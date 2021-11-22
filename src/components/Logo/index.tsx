import React, { memo } from 'react';

import { Title } from './styles';

type Props = {
  color?: string;
};

function LogoComponent({ color }: Props) {
  return <Title color={color}>LochView</Title>;
}

export const Logo = memo(LogoComponent);
