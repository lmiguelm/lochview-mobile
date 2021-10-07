import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList } from 'react-native';

import { Bedroom } from '../../components/Bedroom';

import { Container } from './styles';
import { useTheme } from 'styled-components';

export function Dashboard() {
  const { colors } = useTheme();

  const [bedrooms, setBedrooms] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  function fetchBedrooms() {
    console.log('alo');
    setTimeout(() => {
      const nums = [];

      for (let i = 1; i <= 5; i++) {
        nums.push(Math.random() * (1000 - 6));
      }

      setBedrooms((oldstate) => [...oldstate, ...nums]);
    }, 3000);
  }

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <FlatList
        data={loading ? [1, 2, 3, 4, 5] : bedrooms}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Bedroom isLoading={loading} key={item} />}
        contentContainerStyle={{
          padding: 30,
        }}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchBedrooms}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => <ActivityIndicator size="small" color={colors.primary} />}
      />
    </Container>
  );
}
