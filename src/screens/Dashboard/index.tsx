import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, Keyboard, useWindowDimensions } from 'react-native';

import { Bedroom } from '../../components/Bedroom';

import { Container, Content, Form, Header } from './styles';
import { useTheme } from 'styled-components';
import { SearchInput } from '../../components/SearchInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Filter } from '../../components/Filter';

export function Dashboard() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const [bedrooms, setBedrooms] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState('');

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar style="light" translucent backgroundColor="transparent" />

        <Header>
          <Form
            from={{
              opacity: 0,
              transform: [
                {
                  translateX: -(width * 0.5),
                },
              ],
            }}
            animate={{
              opacity: 1,
              transform: [
                {
                  translateX: 0,
                },
              ],
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}
          >
            <SearchInput
              label="Buscar por quartos"
              value={searchText}
              onChangeText={(value) => setSearchText(value)}
              autoComplete={true}
              children={null}
            />
          </Form>
        </Header>

        <Content>
          <Filter />
        </Content>

        <FlatList
          data={loading ? [1, 2, 3] : bedrooms}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Bedroom isLoading={loading} key={item} />}
          contentContainerStyle={{
            padding: 30,
          }}
          style={{
            height: RFPercentage(60),
            flexGrow: 0,
          }}
          showsVerticalScrollIndicator={false}
          // onEndReached={fetchBedrooms}
          // onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            !loading && <ActivityIndicator size="small" color={colors.primary} />
          }
          // refreshing={false}
          // onRefresh={() => {}}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
