import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';

import { Container, Group } from './styles';

import { useTheme } from 'styled-components';

type Filter =
  | 'sort-alpha-asc'
  | 'sort-alpha-desc'
  | 'cash-plus'
  | 'cash-minus'
  | 'wifi'
  | 'tv'
  | 'snowflake'
  | undefined;

export function Filter() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const [active, setActive] = useState<Filter>(undefined);

  function handleActive(value: Filter) {
    if (value === active) value = undefined;
    setActive(value);
  }

  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 10 }}
      from={{
        opacity: 0,
        transform: [
          {
            translateY: width * 0.5,
          },
        ],
      }}
      animate={{
        opacity: 1,
        transform: [
          {
            translateY: 0,
          },
        ],
      }}
      transition={{
        type: 'timing',
        duration: 1000,
      }}
    >
      <Group
        active={active === 'sort-alpha-asc'}
        onPress={() => handleActive('sort-alpha-asc')}
        style={{ elevation: 10 }}
      >
        <FontAwesome
          name="sort-alpha-asc"
          color={active === 'sort-alpha-asc' ? colors.light : colors.primary}
          size={24}
        />
      </Group>

      <Group
        active={active === 'sort-alpha-desc'}
        onPress={() => handleActive('sort-alpha-desc')}
        style={{ elevation: 10 }}
      >
        <FontAwesome
          name="sort-alpha-desc"
          color={active === 'sort-alpha-desc' ? colors.light : colors.primary}
          size={24}
        />
      </Group>

      <Group
        active={active === 'cash-plus'}
        onPress={() => handleActive('cash-plus')}
        style={{ elevation: 10 }}
      >
        <MaterialCommunityIcons
          name="cash-plus"
          color={active === 'cash-plus' ? colors.light : colors.primary}
          size={32}
        />
      </Group>

      <Group
        active={active === 'cash-minus'}
        onPress={() => handleActive('cash-minus')}
        style={{ elevation: 10 }}
      >
        <MaterialCommunityIcons
          name="cash-minus"
          color={active === 'cash-minus' ? colors.light : colors.primary}
          size={32}
        />
      </Group>

      <Group
        active={active === 'wifi'}
        onPress={() => handleActive('wifi')}
        style={{ elevation: 10 }}
      >
        <Feather name="wifi" color={active === 'wifi' ? colors.light : colors.primary} size={24} />
      </Group>

      <Group active={active === 'tv'} onPress={() => handleActive('tv')} style={{ elevation: 10 }}>
        <MaterialIcons
          name="tv"
          color={active === 'tv' ? colors.light : colors.primary}
          size={24}
        />
      </Group>

      <Group
        active={active === 'snowflake'}
        onPress={() => handleActive('snowflake')}
        style={{ elevation: 10 }}
      >
        <FontAwesome
          name="snowflake-o"
          color={active === 'snowflake' ? colors.light : colors.primary}
          size={24}
        />
      </Group>
    </Container>
  );
}
