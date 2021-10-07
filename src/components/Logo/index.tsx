import React from 'react';

import { Title } from './styles';

type Props = {
  color?: string;
};

export function Logo({ color }: Props) {
  return <Title color={color}>LochView</Title>;
}
